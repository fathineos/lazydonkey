#!/usr/bin/env python3

from json import dump, load, JSONDecodeError
from requests import get
from typing import List, Dict, Any, Optional, Tuple
import os
from PIL import Image
from urllib.parse import urljoin

import musicbrainzngs
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

# Set up MusicBrainz API
musicbrainzngs.set_useragent(
    "LazyDonkey Album Manager",
    "1.0",
    "https://github.com/yourusername/lazydonkey"
)

# Set up Spotify API
# You'll need to set these environment variables:
# export SPOTIPY_CLIENT_ID='your_client_id'
# export SPOTIPY_CLIENT_SECRET='your_client_secret'
sp = spotipy.Spotify(auth_manager=spotipy.oauth2.SpotifyClientCredentials())

# Available moods from main.js
MOODS = [
    "atmospheric", "bittersweet", "badass", "dark", "energetic",
    "fun", "playful", "poetic", "relaxed", "retro", "spiritual"
]

def load_data() -> List[Dict[str, Any]]:
    """Load the existing data from data.json."""
    try:
        with open('data.json', 'r') as f:
            try:
                return load(f)
            except JSONDecodeError:
                print("Warning: data.json is empty or invalid. Starting with empty list.")
                return []
    except FileNotFoundError:
        print("Warning: data.json not found. Starting with empty list.")
        return []

def save_data(data: List[Dict[str, Any]]) -> None:
    """Save the data to data.json."""
    with open('data.json', 'w') as f:
        dump(data, f, indent=2)

def get_next_id(data: List[Dict[str, Any]]) -> int:
    """Get the next available ID."""
    if not data:
        return 1
    return max(album['id'] for album in data) + 1

def get_valid_moods() -> List[str]:
    """Get valid moods from user input."""
    print("\nAvailable moods:")
    for i, mood in enumerate(MOODS, 1):
        print(f"{i}. {mood}")
    
    while True:
        try:
            choices = input("\nEnter mood numbers (comma-separated): ").split(',')
            selected_moods = [MOODS[int(choice.strip()) - 1] for choice in choices]
            return selected_moods
        except (ValueError, IndexError):
            print("Invalid input. Please enter valid numbers.")

def download_cover_art(album_id: int, release_id: str, cover_art_id: str, output_dir: str = "covers") -> bool:
    """
    Download and convert cover art for an album.
    Returns True if successful, False otherwise.
    """
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Base URL for Cover Art Archive
    base_url = "https://coverartarchive.org/release/"
    
    # Construct the URL
    image_url = f"{base_url}{release_id}/{cover_art_id}-500.jpg"
    
    # Create filename using the specified format
    filename = f"{album_id}-thumbnail_500.jpg"
    webp_filename = f"{album_id}-thumbnail_500.webp"
    
    # Full paths for the images
    jpg_path = os.path.join(output_dir, filename)
    webp_path = os.path.join(output_dir, webp_filename)
    
    try:
        # Skip if WebP already exists
        if os.path.exists(webp_path):
            print(f"Skipping {filename} - WebP already exists")
            return True
            
        # Download the image
        response = get(image_url)
        response.raise_for_status()  # Raise an exception for bad status codes
        
        # Save the JPG temporarily
        with open(jpg_path, 'wb') as f:
            f.write(response.content)
        
        # Convert to WebP
        with Image.open(jpg_path) as img:
            img.save(webp_path, 'WEBP', quality=80)
        
        # Remove the JPG file
        os.remove(jpg_path)
        
        print(f"Downloaded and converted: {webp_filename}")
        return True
        
    except Exception as e:
        print(f"Error processing {filename}: {str(e)}")
        # Clean up JPG file if it exists
        if os.path.exists(jpg_path):
            os.remove(jpg_path)
        return False

def search_spotify(artist: str, album: str) -> Optional[str]:
    """
    Search Spotify for album URI.
    Returns the Spotify URI if found, None otherwise.
    """
    try:
        # Search for the album
        query = f"album:{album} artist:{artist}"
        results = sp.search(q=query, type='album', limit=5)
        
        if not results['albums']['items']:
            print("No albums found in Spotify.")
            return None
        
        # Display results for user to choose
        print("\nFound the following albums on Spotify:")
        for i, album_item in enumerate(results['albums']['items'], 1):
            artists = ", ".join(artist['name'] for artist in album_item['artists'])
            print(f"{i}. {album_item['name']} by {artists}")
        
        # Let user choose the correct album
        while True:
            try:
                choice = int(input("\nSelect the correct album (number): ").strip())
                if 1 <= choice <= len(results['albums']['items']):
                    selected_album = results['albums']['items'][choice - 1]
                    return selected_album['uri']
            except (ValueError, IndexError):
                print("Invalid choice. Please try again.")
                
    except Exception as e:
        print(f"Error searching Spotify: {e}")
        return None

def get_cover_art_id(release_id: str) -> Optional[str]:
    """
    Get cover art ID from Cover Art Archive API.
    Returns the cover art ID if found, None otherwise.
    """
    try:
        # Make request to Cover Art Archive API
        url = f"https://coverartarchive.org/release/{release_id}"
        response = get(url)
        
        if response.status_code == 200:
            data = response.json()
            if 'images' in data and data['images']:
                # Get the first image's ID
                return data['images'][0]['id']
        return None
    except Exception as e:
        print(f"Error fetching cover art: {e}")
        return None

def search_musicbrainz(artist: str, album: str) -> Optional[Tuple[str, str]]:
    """
    Search MusicBrainz for release and cover art information.
    Returns a tuple of (release_id, cover_art_id) if found, None otherwise.
    """
    try:
        # Search for the release
        result = musicbrainzngs.search_releases(
            release=album,
            artist=artist,
            limit=5
        )
        
        if not result['release-list']:
            print("No releases found in MusicBrainz.")
            return None
        
        # Display results for user to choose
        print("\nFound the following releases:")
        for i, release in enumerate(result['release-list'], 1):
            print(f"{i}. {release['title']} by {release['artist-credit-phrase']}")
        
        # Let user choose the correct release
        while True:
            try:
                choice = int(input("\nSelect the correct release (number): ").strip())
                if 1 <= choice <= len(result['release-list']):
                    selected_release = result['release-list'][choice - 1]
                    release_id = selected_release['id']
                    
                    # Get cover art ID from Cover Art Archive
                    cover_art_id = get_cover_art_id(release_id)
                    if cover_art_id:
                        print(f"Found cover art ID: {cover_art_id}")
                    else:
                        print("No cover art found for this release.")
                    
                    return release_id, cover_art_id
            except (ValueError, IndexError):
                print("Invalid choice. Please try again.")
            except Exception as e:
                print(f"Error fetching release details: {e}")
                return release_id, None
                
    except musicbrainzngs.ResponseError as e:
        print(f"Error searching MusicBrainz: {e}")
        return None

def add_album() -> None:
    """Interactive function to add a new album."""
    data = load_data()
    
    print("\n=== Add New Album ===")
    
    # Get basic album information
    artist = input("\nArtist name: ").strip()
    name = input("Album name: ").strip()
    
    # Try to fetch Spotify URI
    print("\nSearching Spotify...")
    spotify_uri = search_spotify(artist, name)
    
    if spotify_uri:
        print(f"\nFound Spotify URI: {spotify_uri}")
    else:
        # Fallback to manual input if auto-fetch fails
        print("\nCould not find Spotify URI automatically.")
        spotify_uri = input("Please enter Spotify URI manually (e.g., spotify:album:...): ").strip()
    
    # Try to fetch MusicBrainz data
    print("\nSearching MusicBrainz...")
    musicbrainz_data = search_musicbrainz(artist, name)
    
    if musicbrainz_data:
        release_id, cover_art_id = musicbrainz_data
        print(f"\nFound MusicBrainz data:")
        print(f"Release ID: {release_id}")
        if cover_art_id:
            print(f"Cover Art ID: {cover_art_id}")
    else:
        # Fallback to manual input if auto-fetch fails
        print("\nCould not find MusicBrainz data automatically.")
        print("Please enter the information manually:")
        release_id = input("Release ID: ").strip()
        cover_art_id = input("Cover Art ID: ").strip()
    
    # Get moods
    moods = get_valid_moods()
    
    # Create new album entry
    new_album = {
        "id": get_next_id(data),
        "artist": artist,
        "name": name,
        "musicbrainz": {
            "release_id": release_id,
            "cover_art_id": cover_art_id
        },
        "spotify_uri": spotify_uri,
        "mood": moods
    }
    
    # Add to data and save
    data.append(new_album)
    save_data(data)
    
    # Download cover art if available
    if cover_art_id:
        print("\nDownloading cover art...")
        if download_cover_art(new_album['id'], release_id, cover_art_id):
            print("Cover art downloaded successfully!")
        else:
            print("Failed to download cover art.")
    
    print(f"\nSuccessfully added album: {name} by {artist}")

def main():
    while True:
        print("\n=== Album Manager ===")
        print("1. Add new album")
        print("2. Exit")
        
        choice = input("\nEnter your choice (1-2): ").strip()
        
        if choice == "1":
            add_album()
        elif choice == "2":
            print("\nGoodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main() 
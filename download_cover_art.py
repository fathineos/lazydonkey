import json
import os
import requests
from PIL import Image
from urllib.parse import urljoin

def download_cover_art(data_file, output_dir):
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Read the JSON file
    with open(data_file, 'r') as f:
        albums = json.load(f)
    
    # Base URL for Cover Art Archive
    base_url = "https://coverartarchive.org/release/"
    
    # Download each cover art
    for album in albums:
        album_id = album['id']
        release_id = album['musicbrainz']['release_id']
        cover_art_id = album['musicbrainz']['cover_art_id']
        
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
                continue
                
            # Download the image
            response = requests.get(image_url)
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
            
        except requests.exceptions.RequestException as e:
            print(f"Failed to download {filename}: {str(e)}")
        except Exception as e:
            print(f"Error processing {filename}: {str(e)}")
            # Clean up JPG file if it exists
            if os.path.exists(jpg_path):
                os.remove(jpg_path)

if __name__ == "__main__":
    # Path to your JSON file
    data_file = "data.json"
    # Directory to save the images
    output_dir = "covers"
    
    download_cover_art(data_file, output_dir) 
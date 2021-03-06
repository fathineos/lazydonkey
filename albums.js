var ATMOSPERIC = "atmosperic"
var BITTERSWEET = "bittersweet"
var BADASS = "badass"
var DARK = "dark"
var ENERGETIC = "energetic"
var FUN = "fun"
var PLAYFUL = "playful"
var POETIC = "poetic"
var RELAXED = "relaxed"
var RETRO = "retro"
var SPIRITUAL = "spiritual"

var albums = [
  {
    id: 1,
    artist: "Henry Texier",
    name: "Varech",
    cover_art_url: "https://musicbrainz.org/release/1fa0d391-bfc1-48c1-83ad-33df8f1481a7/cover-art",
    spotify_uri: "spotify:album:3eshODPVedUsJMYIWB91Bq",
    mood: [ATMOSPERIC],
  },
  {
    id: 2,
    artist: "Roberto Musci",
    name: "Tower of Silence",
    cover_art_url: "https://musicbrainz.org/release/82342b9a-2548-463f-99ba-eae23f2c60e8/cover-art",
    spotify_uri: "spotify:album:0emZeMYklVE3LS97rGKN8S",
    mood: [SPIRITUAL],
  },
  {
    id: 3,
    artist: "Broadcast",
    name: "Tender Buttons",
    cover_art_url: "https://musicbrainz.org/release/111349e0-5427-4dfb-b419-e2e689861ebf/cover-art",
    spotify_uri: "spotify:album:28RiDrxACWNtbrUNy9Ks1X",
    mood: [ATMOSPERIC, PLAYFUL],
  },
  {
    id: 4,
    artist: "The RH Factor",
    name: "Hard Groove",
    cover_art_url: "https://musicbrainz.org/release/832c274d-6b8d-4292-b3f5-f78dbfed373a/cover-art",
    spotify_uri: "spotify:album:7ocjymC4B0S00K0BZ71M9X",
    mood: [ENERGETIC, FUN],
  },
  {
    id: 5,
    artist: "Ramsey Lewis",
    name: "Mother Nature's Son",
    cover_art_url: "https://musicbrainz.org/release/1d5461d0-07c0-431a-b5b3-e7f8088642cd/cover-art",
    spotify_uri: "spotify:album:2igwXQzQjvRkRnQiHj3GWs",
    mood: [RELAXED, FUN],
  },
  {
    id: 6,
    artist: "Sleaford Mods",
    name: "Key Markets",
    cover_art_url: "https://musicbrainz.org/release/f169af39-ef18-4e88-8cd2-93ee9042a552/cover-art",
    spotify_uri: "spotify:album:5v5XTM8IhfQUzKgaarEpPK",
    mood: [ENERGETIC, BADASS]
  },
  {
    id: 7,
    artist: "Muddy Waters",
    name: "After the Rain",
    cover_art_url: "https://musicbrainz.org/release/ece11094-6655-4ff8-aa94-5e9bf0d06468/cover-art",
    spotify_uri: "spotify:album:0EPqCz0qUIjjdxU010PP2Q",
    mood: [BADASS],
  },
  {
    id: 8,
    artist: "Kurt Vile",
    name: "Bottle it In",
    cover_art_url: "https://musicbrainz.org/release/ece11094-6655-4ff8-aa94-5e9bf0d06468/cover-art",
    spotify_uri: "spotify:album:7lXj7neMWuwD4PTYkaToes",
    mood: [BITTERSWEET, ATMOSPERIC],
  },
  {
    id: 9,
    artist: "Brian Eno",
    name: "Another Green World",
    cover_art_url: "https://musicbrainz.org/release/ae71c892-ecb6-4834-b520-6c88351e3b6c/cover-art",
    spotify_uri: "spotify:album:6uoeezh45SYEb8lcT8gDTY",
    mood: [ATMOSPERIC],
  },
  {
    id: 10,
    artist: "Courtney Barnett",
    name: "Tell Me How You Really Feel",
    cover_art_url: "https://musicbrainz.org/release/27e3197a-7c02-4a27-b135-9768e1baecc6/cover-art",
    spotify_uri: "spotify:album:6dWD9BmFPTaOGP0SO7NJyM",
    mood: [BITTERSWEET],
  },
  {
    id: 11,
    artist: "Don Cherry",
    name: "Brown Rice",
    cover_art_url: "https://musicbrainz.org/release//cover-art",
    spotify_uri: "spotify:album:4g7WTSk1vwtx8rf330Wd7L",
    mood: [SPIRITUAL],
  }, {
    id: 12,
    artist: "Dry Cleaning",
    name: "Sweet Princess",
    cover_art_url: "https://musicbrainz.org/release/04b5d964-1a71-4d3e-ad2d-5c46ffeb7407/cover-art",
    spotify_uri: "spotify:album:2RoDiBN2teda8nQ33CO2WR",
    mood: [ENERGETIC]
  }, {
    id: 13,
    artist: "Kedr Livanskiy",
    name: "Adriana",
    cover_art_url: "https://musicbrainz.org/release/894aa635-5a57-4220-88f5-03eb4a7281f7/cover-art",
    spotify_uri: "spotify:album:34ynU7YpurAxR383tfswdl",
    mood: [ATMOSPERIC, DARK],
  }, {
    id: 14,
    artist: "Cate le Bon",
    name: "Reward",
    cover_art_url: "https://musicbrainz.org/release/04ebf474-6351-4db2-8613-7baafed71232/cover-art",
    spotify_uri: "spotify:album:082FaK20Q5pWBugogTQbGW",
    mood: [BITTERSWEET, PLAYFUL],
  }, {
    id: 15,
    artist: "Fontaines D.C",
    name: "Dogrel",
    cover_art_url: "https://musicbrainz.org/release/cf9ccaf9-3b92-4372-9ea0-9044951710fd/cover-art",
    spotify_uri: "spotify:album:1i9PDv6BO8c8Y5lxMG6Lej",
    mood: [ENERGETIC],
  }, {
    id: 16,
    artist: "Viagra Boys",
    name: "Street Worms",
    cover_art_url: "https://musicbrainz.org/release/05266659-d996-49ac-8e90-c164065228e3/cover-art",
    spotify_uri: "spotify:album:7GCnSXQc6H4vF8TU7hSdSk",
    mood: [BADASS, ENERGETIC],
  }, {
    id: 17,
    artist: "El-P",
    name: "Cancer 4 Cure",
    cover_art_url: "https://musicbrainz.org/release/25baebca-2e94-41f7-bd02-e5612213228a",
    spotify_uri: "spotify:album:75QfNfqa1LT0R5MIRKqR2q",
    mood: [BADASS, ENERGETIC],
  }, {
    id: 18,
    artist: "Bobby Womack",
    name: "The Bravest Man in the Universe",
    cover_art_url: "https://musicbrainz.org/release/3bf599f8-bb7d-495a-8aa1-4666bb3478db",
    spotify_uri: "spotify:album:75QfNfqa1LT0R5MIRKqR2q",
    mood: [ATMOSPERIC, POETIC],
  }, {
    id: 19,
    artist: "Jon Hopkins",
    name: "Immunity",
    cover_art_url: "https://musicbrainz.org/release/a9b6f61e-1927-4c58-85fc-5f540349e304",
    spotify_uri: "spotify:album:0Zpht5ek9rMGsGB5IYPjlz",
    mood: [ATMOSPERIC],
  }, {
    id: 20,
    artist: "Can",
    name: "Future Days",
    cover_art_url: "https://musicbrainz.org/release/a9b6f61e-1927-4c58-85fc-5f540349e304",
    spotify_uri: "spotify:album:75o5qK7yKZIGyPDa7bWOPn",
    mood: [PLAYFUL],
  }, {
    id: 21,
    artist: "Lou Reed / John Cale",
    name: "Songs for Drella",
    cover_art_url: "https://musicbrainz.org/release/244d099e-9522-4f6e-ad62-d64fc274f907",
    spotify_uri: "spotify:album:4Nyu5zVDr4XV6QOBCqdTrk",
    mood: [BITTERSWEET, PLAYFUL],
  }, {
    id: 22,
    artist: "Parquet Courts",
    name: "Wide Awake!",
    cover_art_url: "https://musicbrainz.org/release/244d099e-9522-4f6e-ad62-d64fc274f907",
    spotify_uri: "spotify:album:5uTI2HcpAywDP8Vo1DpJta",
    mood: [ENERGETIC, PLAYFUL],
  }, {
    id: 23,
    artist: "The Desert Sessions",
    name: "Desert Seessions, Volumes 11 & 12",
    cover_art_url: "https://musicbrainz.org/release/62179626-f17b-4c90-8095-a73b72f664f1",
    spotify_uri: "spotify:album:7xSi5UDcfXAzR7NWSpFJiL",
    mood: [BADASS, ENERGETIC],
  }, {
    id: 24,
    artist: "Emahoy Tsegué / Maryam Guèbrou",
    name: "Éthiopiques 21: Ethiopia Song",
    cover_art_url: "https://musicbrainz.org/release/fd107d3a-50d6-4def-8b21-cbe624a81b42",
    spotify_uri: "spotify:album:7xSi5UDcfXAzR7NWSpFJiL",
    mood: [PLAYFUL],
  }, {
    id: 25,
    artist: "Stelios Petrakis / Efrén López / Bijan Chemirani",
    name: "Mavra Froudia",
    cover_art_url: "https://musicbrainz.org/release/7a6b5676-aa46-44ce-9adc-8cb558bb85ce",
    spotify_uri: "spotify:album:3mxeBt8teQJUaPxCwEvA0D",
    mood: [ATMOSPERIC],
  }, {
    id: 26,
    artist: "The Trypes",
    name: "Music for Neighbors",
    cover_art_url: "https://musicbrainz.org/release/6021faf9-5556-4945-b884-cff477bc3cd7",
    spotify_uri: "spotify:album:1OqiXbj9qvIznc8QqkCpPPb",
    mood: [BITTERSWEET],
  }, {
    id: 27,
    artist: "Young Marble Giants",
    name: "Colossal Youth",
    cover_art_url: "https://musicbrainz.org/release/d43ec088-ce52-44a9-b58a-a34bd5fe7df6",
    spotify_uri: "spotify:album:5wxOkqHT4xGadN56TAzF09",
    mood: [BITTERSWEET, PLAYFUL],
  }, {
    id: 28,
    artist: "Andy Stott",
    name: "Faith in Strangers",
    cover_art_url: "https://musicbrainz.org/release/2d7b9f35-fada-4497-bfc7-a74140e8ef50",
    spotify_uri: "spotify:album:1BzMONuUlgUnqOrg2aQeAY",
    mood: [ATMOSPERIC],
  }, {
    id: 29,
    artist: "Pye Corner Audio",
    name: "Stasis",
    cover_art_url: "https://musicbrainz.org/release/3c688f4b-0702-45e9-a630-fef5d64a2029",
    spotify_uri: "spotify:album:4MEJL8b4fQQ908mzoTFT6P",
    mood: [ATMOSPERIC, RETRO],
  }, {
    id: 30,
    artist: "The Modern Lovers",
    name: "The Modern Lovers",
    cover_art_url: "https://musicbrainz.org/release/8e8dfef6-6adf-34e3-89a9-37e920f1c9e6",
    spotify_uri: "spotify:album:5BPCP7WSGBG4br2o4WRmd8",
    mood: [BITTERSWEET],
  }, {
    id: 31,
    artist: "Art Farmer",
    name: "Crawl Space",
    cover_art_url: "https://musicbrainz.org/release/a8307c57-6f11-4453-83d5-1b345b21cc37",
    spotify_uri: "spotify:album:5SNc8uwbqPHFxpdOsV808z",
    mood: [ATMOSPERIC],
  }, {
    id: 32,
    artist: "Betty Davis",
    name: "They say I'm different",
    cover_art_url: "https://musicbrainz.org/release-group/642b737a-3f6f-3fb7-8745-28f7f7498a3d",
    spotify_uri: "spotify:album:6cnH06Wxjb2QqUHFa8PEwc",
    mood: [ENERGETIC, BADASS],
  }, {
    id: 33,
    artist: "Add N to (X)",
    name: "Avant Hard",
    cover_art_url: "https://musicbrainz.org/release-group/80fe1ecb-65b3-3b6a-b6bd-7f5f21ea3b20",
    spotify_uri: "spotify:album:6cnH06Wxjb2QqUHFa8PEwc",
    mood: [PLAYFUL],
  }, {
    id: 34,
    artist: "Ariel Pink's Haunted Graffiti",
    name: "Mature Themes",
    cover_art_url: "https://musicbrainz.org/release/0c288084-0eda-4eb6-a218-3d938bcaa512",
    spotify_uri: "spotify:album:08RdKFNm8Cu86FSzlhoAoh",
    mood: [PLAYFUL, RETRO],
  }, {
    id: 35,
    artist: "The Dead Weather",
    name: "Horehound",
    cover_art_url: "https://musicbrainz.org/release-group/b7435103-780b-4d02-902c-87e7bb6ca9c7",
    spotify_uri: "spotify:album:1nxECUyuIZF5JCrO9Xo2jO",
    mood: [ENERGETIC, DARK],
  }, {
    id: 36,
    artist: "Black Mountain",
    name: "In the Future",
    cover_art_url: "https://musicbrainz.org/release-group/d4bc322a-66e3-33ca-b923-21765296ccce",
    spotify_uri: "spotify:album:6Px7D6BKZIj4DuaRWsADBe",
    mood: [ENERGETIC],
  },
];

albums.forEach(function(item){
  parts = item.spotify_uri.split(":");
  item["spotify_url"] = "https://open.spotify.com/" + parts[1] + "/" + parts[2];
})

const MOOD_ATMOSPERIC = "atmosperic";
const MOOD_BITTERSWEET = "bittersweet";
const MOOD_BADASS = "badass";
const MOOD_DARK = "dark";
const MOOD_ENERGETIC = "energetic";
const MOOD_FUN = "fun";
const MOOD_PLAYFUL = "playful";
const MOOD_POETIC = "poetic";
const MOOD_RELAXED = "relaxed";
const MOOD_RETRO = "retro";
const MOOD_SPIRITUAL = "spiritual";
const MOOD_ALL = "all";

const THEME_RED = "red";
const THEME_GREEN = "green";
const THEME_BLUE = "blue";

// Pre-fetch album data synchronously
let request = new XMLHttpRequest();
request.open("GET", "./data.json", false);
request.send(null);
let albums = null;
if (request.status === 200) {
  albums = JSON.parse(request.responseText);
} else {
  console.log("Error loading album data:", request.status);
}

const distinctMoods = new Set(
  [MOOD_ALL].concat(
    albums.reduce(
      (acc, cur) => acc.concat(cur.mood),
      []
    ).sort()
  )
);

function getActiveMood() {
  mood = location.href.split('#').pop();
  if (!distinctMoods.has(mood)) {
    mood = MOOD_ALL;
  }
  return mood;
}

function filterAlbumsByMood(moodName) {
  if (moodName === MOOD_ALL) {
    albumList = albums;
  } else {
    albumList = albums.filter(album => album.mood.indexOf(moodName) >= 0);
  }
  return albumList;
}

function initializeMoodObjects(activeMood) {
  moodList = []
  distinctMoods.forEach(
    mood => moodList.push({name: mood, isActive: mood === activeMood})
  );
  return moodList;
}

function randomizeList(list) {
  return list.sort(
    () => 0.5 - Math.random()
  );
}

var app = new Vue({
  el: "#app",
  data: {
    color: randomizeList([THEME_BLUE, THEME_GREEN, THEME_RED]).pop(),
    moodList: initializeMoodObjects(),
    albumList: albums,
    activeMood: getActiveMood(),
  },
  created: function () {
    this.albumList = randomizeList(
      filterAlbumsByMood(this.activeMood)
    );
    this.moodList = initializeMoodObjects(this.activeMood);
  },
  methods: {
    filter_mood: function (event) {
      this.activeMood = event.currentTarget.id.split("-")[1];

      // update active mood
      this.moodList.forEach(
        mood => this.$set(mood, 'isActive',  this.activeMood === mood.name)
      );

      // update album list
      this.albumList = randomizeList(
        filterAlbumsByMood(this.activeMood)
      );
    }
  }
});

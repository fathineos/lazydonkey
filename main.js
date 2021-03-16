var moodAll = "all";
var distinctMoods = new Set(
  [moodAll].concat(
    albums.reduce(
      (acc, cur) => acc.concat(cur.mood),
      []
    ).sort()
  )
);

function getActiveMood() {
  mood = location.href.split('#').pop();
  if (!distinctMoods.has(mood)) {
    mood = moodAll;
  }
  return mood;
}

function filterAlbumsByMood(moodName) {
  if (moodName === moodAll) {
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
    color: randomizeList(["red", "blue", "green"]).pop(),
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

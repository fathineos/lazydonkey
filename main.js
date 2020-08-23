var moodAll = "all";

function initializeMoods() {
  distinctMoods = new Set(
    ["all"].concat(
      albums.reduce(
        (acc, cur) => acc.concat(cur.mood),
        []
      ).sort()
    )
  );
  moodList = []
  distinctMoods.forEach(
    mood => moodList.push({name: mood, isActive: mood === moodAll})
  );
  return moodList;
}

function initializeAlbumList() {
  return randomizeList(albums);
}

function randomizeList(list) {
  return list.sort(
    () => 0.5 - Math.random()
  );
}

var app = new Vue({
  el: "#app",
  data: {
    // shuffle items order
    albumList: initializeAlbumList(),
    moodList: initializeMoods(),
    // random color
    color: randomizeList(["red", "blue", "green"])[0],
  },
  methods: {
    filter_mood: function (event) {
      moodName = event.currentTarget.id.split("-")[1];

      // update active mood
      this.moodList.forEach(
        mood => this.$set(mood, 'isActive',  moodName === mood.name)
      );

      // update album list
      if (moodName === moodAll) {
        newAlbumList = albums;
      } else {
        newAlbumList = albums.filter(album => album.mood.indexOf(moodName) >= 0);
      }

      this.albumList = randomizeList(newAlbumList);
    }
  }
});

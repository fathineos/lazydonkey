var app = new Vue({
  el: "#app",
  data: {
    // shuffle items order
    albumList: albums.sort(() => 0.5 - Math.random()),
    // random color
    color: ["red", "blue", "green"].sort(() => 0.5 - Math.random())[0],
  }
})

/*
  Color Palette: Red #f15c42
 */
var colors = ["red", "green", "blue"];
var random_color = colors[Math.floor(Math.random() * colors.length)]
document.addEventListener('DOMContentLoaded', function () {
    img = document.querySelector("header [id=logo]")
    img.src = img.src.replace("blue", random_color)

    var overlays = document.querySelectorAll('div[class*="overlay"]');
    for (var i = 0; i < overlays.length; i++) {
        overlays[i].classList.add(random_color);
    }
});

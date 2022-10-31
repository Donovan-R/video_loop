const preLoad = document.querySelector(".loading_logo");

window.addEventListener("load", function () {
  preLoad.classList.add("video-loading");
});
const video = document.querySelector(".videoPlay");
const btn = document.querySelector("button");
const switcher = document.querySelector(".switch");

btn.addEventListener("click", function () {
  if (!switcher.classList.contains("slide")) {
    switcher.classList.add("slide");
    video.pause();
  } else {
    switcher.classList.remove("slide");
    video.play();
  }
});

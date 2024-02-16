let bg_music = document.getElementById("bg-music");
let bg_music_icon = document.getElementById("music-icon");

function music_btn_pressed() {
  if (bg_music.duration > 0 && !bg_music.paused) {
    bg_music.pause();
    bg_music_icon.src = "Resources/background music/music_status/pause.png";
  } else {
    play_music();
    bg_music_icon.src = "Resources/background music/music_status/play.png";
  }
}

function play_music() {
  bg_music.play();
}

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  console.log(scrollPosition);
});

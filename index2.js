var keyboard = ["w", "a", "s", "d", "j", "k", "l"];
for (let i = 0; i < keyboard.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playMusic);
}
var sound = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];
for (let j = 0; j < sound.length; j++) {
  function playMusic() {
    var name = "sounds/" + sound[j] + ".mp3";
    var audio = new Audio(name);
    audio.play();
  }
}

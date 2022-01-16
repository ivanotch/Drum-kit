
//button press
document.querySelectorAll(".drum").forEach(item => {

  item.addEventListener("click", function handleClick() {

    var buttonInnerHTML = this.innerHTML;
    keyPress(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


  });

});

//keyboard press
document.addEventListener("keydown", function(event) {
  keyPress(event.key);
  buttonAnimation(event.key);
});


function keyPress(key) {

  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
      default:
    }
};

function buttonAnimation(currentKey) {

  var currentKey = document.querySelector("." + currentKey);
  currentKey.classList.add("pressed");

  setTimeout(function() {
    currentKey.classList.remove("pressed");
  }, 100);

}

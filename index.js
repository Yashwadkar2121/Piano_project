let pianokey = [];
for (let i = 1; i <= 24; i++) {
  pianokey[i] = document.getElementById("key" + i);
}

// var a = new Audio("key (1).mp3");
// a.play();
// let newsome = document.addEventListener("keydown", (ev) => {
//   if (ev.code == "Digit 1") {
//     a.play();
//   }
// });

function playsound(count) {
  let newurl = "24/key" + " (" + count + ")" + ".mp3";
  console.log(newurl);

  new Audio(newurl).play();
}

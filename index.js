let t = 0;
let l = 0;

window.addEventListener("keydown", function(event) {
  if (event.key === "w") {
    t = t - 3;
  }
  if (event.key === "a") {
    l = l - 1;
  }
  if (event.key === "s") {
    t = t + 3;
  }
  if (event.key === "d") {
    l = l + 1;
  }
  document.getElementById("mycar").style.top = `${t}vh`;
  document.getElementById("mycar").style.left = `${l}vw`;
})

document.getElementById("start").addEventListener("click", function(){
    document.getElementById("start").style.display='none'
    // document.getElementById("road").style.animation='roadanimation 20s linear infinite'
})

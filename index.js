// var bar = document.querySelector("bar");
// // console.log(bar);
// var cross = document.getElementsByClassName("cross");


// // alert("skdn");
// bar.addEventListener("click", function(event) {
//     event.preventDefault();
//     alert("sjdc");
// });

// document.addEventListener("DOMContentLoaded", function() {
//     var bar = document.querySelector(".bar"); // Assuming it's a class
//     // ... rest of your code
//     bar.addEventListener("click", () => {
//         alert("ksdd");
//     })
//   });
  
var btn= document.querySelector(".bar");
var screen = document.querySelector(".fullScreenToggle")
 var flag = 0;
btn.addEventListener("click",function(){

   if(flag == 0) {
   screen.style.top = "17%";
      flag=1;
   }
   else  {
      screen.style.top = "-100%";
      flag = 0;
   }
})
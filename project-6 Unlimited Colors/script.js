//generating random colors


function generateRandomColors(){
    let color="#";
    const hex="0123456789ABCDEF";
   
   for( let i=0;i<6;i++){
    color+=hex[(Math.floor(Math.random()*16))];
   }
   return color;
}
console.log(generateRandomColors());
//selecting all the dom elements
const body= document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

//adding event listener to start buttons and stop button
start.addEventListener("click",function(){
    body.style.backgroundColor=generateRandomColors();
});


//generating random colors


function generateRandomColors(){
    let color="#";
    const hex="0123456789ABCDEF";
   
   for( let i=0;i<6;i++){
    color+=hex[(Math.floor(Math.random()*16))];
   }
   return color;
}

//selecting all the dom elements
const body= document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

//adding event listener to start buttons and stop button
let intervalId;
start.addEventListener("click",function(){

    clearInterval(intervalId); //clearing any previous interval to avoid multiple intervals
    intervalId=setInterval(function(){
        body.style.backgroundColor=generateRandomColors();
    },1000)
    
});

stop.addEventListener("click",function(){
    clearInterval(intervalId);
})


const button=document.querySelector("button");

button.addEventListener("click",function(e){
    const height=document.querySelector("#height").value;
    const weight=document.querySelector("#weight").value;
    
    const bmi= (weight/((height*height)/10000)).toFixed(2);
    
} )
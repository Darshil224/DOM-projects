
const form =document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)

    const result=document.querySelector('#results')

    if(height===""||height<0||isNaN(height)){
        result.innerHTML="Please enter valid height"
    }
    else if(weight===""||weight<0||isNaN(weight)){
        result.innerHTML=`Please enter valid weight`
    }
    else{
       const bmi = (weight/((height*height)/10000)).toFixed(2)

       //display the result
       result.innerHTML=`<span>Your BMI is ${bmi}</span>`
       setTimeout(() => {
        result.innerHTML="";
        document.querySelector('#height').value="";
        document.querySelector('#weight').value="";
       }, 5000);


    }


});
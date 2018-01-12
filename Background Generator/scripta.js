var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var css=document.querySelector("h3");
var body=document.getElementById("gradient");
var btn=document.querySelector("button");


function setGradient(){
	body.style.background="linear-gradient(to right," +
	color1.value +", " +color2.value + ")";

	css.textContent=body.style.background +";";
}


function defaultColor(){
body.style.background="linear-gradient(to right," +
	color1.value +", " +color2.value + ")";


}

function randomise() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

btn.addEventListener('click', function(){
    randomise();
});

body.addEventListener("onload",setGradient());
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);



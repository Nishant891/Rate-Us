const display1=document.querySelector(".box1");
const display2=document.querySelector(".box2");
const submit=document.getElementById("sub");
const rates=document.querySelectorAll(".nums");
const rating=document.getElementById("ratin");
submit.addEventListener("click",function(){
    display2.classList.remove("hidden");
    display1.style.display="none";
});
rates.forEach((rate)=>{
    rate.addEventListener("click", ()=>{
        rating.innerHTML=rate.innerHTML;
    })
})

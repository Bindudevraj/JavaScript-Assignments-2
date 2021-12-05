let counterDisplayEle = document.querySelector('.counter-display');
let counterMinusEle = document.querySelector('.counter-minus');
let counterPlusEle = document.querySelector('.counter-plus');

let count = 0;

update();

counterPlusEle.addEventListener("click",()=>{
    count++;
    update();
}) ;

counterMinusEle.addEventListener("click",()=>{
    count--;
    update();
});

function update(){
    counterDisplayEle.innerHTML = count;
};
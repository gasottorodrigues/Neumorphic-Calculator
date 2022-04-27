const inputTxt = document.querySelector('#formula-area');
const asw = document.querySelector("#answer-area");

function operate(num1, num2, op){
    switch(op){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '×':
            return num1*num2;
        case '/':
            return num1/num2;
    }
}

const btAC = document.querySelector('#bt-ac');
const bt1 = document.querySelector('#bt-1');
const bt2 = document.querySelector('#bt-2');
const bt3 = document.querySelector('#bt-3');
const bt4 = document.querySelector('#bt-4');
const bt5 = document.querySelector('#bt-5');
const bt6 = document.querySelector('#bt-6');
const bt7 = document.querySelector('#bt-7');
const bt8 = document.querySelector('#bt-8');
const bt9 = document.querySelector('#bt-9');
const bt0 = document.querySelector('#bt-0');
const btdot = document.querySelector('#bt-dot');

const btplus = document.querySelector('#bt-plus');
const btminus = document.querySelector('#bt-minus');
const btmult = document.querySelector('#bt-mult');
const btdiv = document.querySelector('#bt-div');
const btequal = document.querySelector('#bt-equal');

btAC.addEventListener("click",()=>{
    inputTxt.innerHTML = '';
    asw.innerHTML = '';
})

bt1.addEventListener("click",()=>{
    inputTxt.innerHTML += 1;
})

bt2.addEventListener("click",()=>{
    inputTxt.innerHTML += 2;
})

bt3.addEventListener("click",()=>{
    inputTxt.innerHTML += 3;
})

bt4.addEventListener("click",()=>{
    inputTxt.innerHTML += 4;
})

bt5.addEventListener("click",()=>{
    inputTxt.innerHTML += 5;
})

bt6.addEventListener("click",()=>{
    inputTxt.innerHTML += 6;
})

bt7.addEventListener("click",()=>{
    inputTxt.innerHTML += 7;
})

bt8.addEventListener("click",()=>{
    inputTxt.innerHTML += 8;
})

bt9.addEventListener("click",()=>{
    inputTxt.innerHTML += 9;
})

bt0.addEventListener("click",()=>{
    inputTxt.innerHTML += 0;
})

btdot.addEventListener("click",()=>{
    inputTxt.innerHTML += '.';
})

btplus.addEventListener("click",()=>{
    inputTxt.innerHTML += " + ";
})

btminus.addEventListener("click",()=>{
    inputTxt.innerHTML += " - ";
})

btdiv.addEventListener("click",()=>{
    inputTxt.innerHTML += " / ";
})

btmult.addEventListener("click",()=>{
    inputTxt.innerHTML += " &times; ";
})

btequal.addEventListener("click",()=>{
    let op = inputTxt.innerHTML;
    op = op.split(' ');

    var nmbrs = [];
    var ops = [];

    for(i in op){
        console.log(parseFloat(op[i]))
        if(!isNaN(parseFloat(op[i]))){
            nmbrs.push(parseFloat(op[i]))
        }else{
            ops.push(op[i])
        }
    }
    console.log(ops);

    let result = operate(nmbrs[0],nmbrs[1],ops[0]);
    for(i=1; i < ops.length;i++){
        result += operate(result,nmbrs[i+1],ops[i]);
    }

    asw.innerHTML = result;
})
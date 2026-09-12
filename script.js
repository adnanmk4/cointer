const labelCounter = document.getElementById("labelCounter");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

function increase(){
    count++;
    labelCounter.textContent = count;
}

function decrease(){
    count--;
    labelCounter.textContent = count;

    if(count <= 0){
        count = 0;
    }       

}

function reset(){
    count = 0;
    labelCounter.textContent = count;
}
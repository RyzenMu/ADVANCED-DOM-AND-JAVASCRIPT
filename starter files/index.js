const buttons = document.querySelectorAll('.drum')
function clickFunction(){
    console.log(this.innerHTML);
    const sound = new Audio("sounds/crash.mp3")
    sound.play();
}
buttons.forEach((item) => {
    item.addEventListener('click', clickFunction);
})

function add(n1, n2) {
    return n1 + n2;
}

function mul(n1, n2) {
    return n1 * n2;
}

// higher order function
function calc(n1, n2, operator) {
    return operator(n1, n2);
}

console.log(calc(3, 4, add));
console.log(calc(3, 4, mul));
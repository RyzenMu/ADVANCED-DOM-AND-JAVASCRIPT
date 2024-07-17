const buttons = document.querySelectorAll('.drum')
function clickFunction(){
    alert('i am clicked');
}
buttons.forEach((item) => {
    item.addEventListener('click', clickFunction);
})
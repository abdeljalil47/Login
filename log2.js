/* Abdeljalil47 */

/* username label */
function showLabel() {
    const input = document.getElementById('username');
    const label = document.getElementById('user');
    const input1 = document.getElementById('password');
    const label1 = document.getElementById('pass');
    if (input.value === ""){
        label.style.visibility = "hidden";
    } else {
        label.style.visibility = "visible";
    }
    if (input1.value === ""){
        label1.style.visibility = "hidden";
    } else {
        label1.style.visibility = "visible";
    }
}
document.getElementById('button').addEventListener('click',function(){
    const input = document.getElementById('username');
    const input1 = document.getElementById('password');
    const line = 8;

    if (input.value.length < line && input1.value.length < line){
        alert('You forgot somethings !')
    }else{
        alert('Welcome');
    }
})
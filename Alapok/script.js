const display = document.getElementById("display");

function add(input){
    display.value += input;
}

function clearall(){
    display.value = "";
}

function calc(){
    if (display.value == "10+9") {
        display.value = 21;
    } else if (display.value == "1-1") {
        display.value = 35;
    }
     else{
        display.value = eval(display.value);
    }
        
}
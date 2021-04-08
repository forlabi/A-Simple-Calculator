//Targeting and Storing buttons and display classes/ID in variables
let numButtons = document.getElementsByClassName("num-btn")
let operators = document.getElementsByClassName("operator")
let decimal = document.getElementById("decimal")
let reset = document.getElementById("reset")
let del = document.getElementById("delete")
let display = document.getElementsByClassName("cal-display");

//Declaring Variables that stores value of buttons clicked
let currentDisVal = "0";
let pendingVal = ''
let displayArray = [];

// Adding Event listeners to number buttons
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', clickedButton(this.value))
    
};

// Adding Event listeners to operator buttons
for (let i = 0; i < operators.length; i++) {
    operator 
    operators[i].addEventListener('click', singleOperator(this.value));
    
};

// Adding Event listeners to 'Reset' button
reset.addEventListener('click', resetDisplay(this.value));

// Adding Event listeners to 'Decimal' button
decimal.addEventListener('click', addDecimal(this.value));

// Adding Event listeners to 'Delete' button
del.addEventListener('click', deleteButton(this.value));



//<------- Defining functions of all buttons ------------>

// function of a clicked button
function clickedButton(event) {
    let clickedBtn = event.textContent; //getting the value of the clicked button

    if (currentDisVal === "0") {//if the value on the display variable is '0'
        currentDisVal = '';     //Clear the display
        currentDisVal += clickedBtn;//Append the value of the clicked button
        pendingVal += currentDisVal;//Append this value to a pending variable
        currentDisVal = ''          //clear the display variable
        display[0].innerHTML = pendingVal ;// display the value of clciked button on the display element
        displayTruncate()
        

    } else { //This block of code allow typing even when the display variableisn't '0'
        currentDisVal += clickedBtn;
        pendingVal += currentDisVal;
        currentDisVal = ''
        display[0].innerHTML = pendingVal;
        displayTruncate()
    
    }


}

// function that defines the operation of the arithmetic operator buttons
function operations(event) {
    let clickedBtn = event.textContent;

    switch (clickedBtn) {
        case "+":
            pendingVal += currentDisVal;
            currentDisVal = "";
            display[0].innerHTML = pendingVal;
            pendingVal += clickedBtn;
            display[0].innerHTML = pendingVal
            break;

        case "-":
            pendingVal += currentDisVal;
            currentDisVal = "";
            display[0].innerHTML = pendingVal;
            pendingVal += clickedBtn;
            display[0].innerHTML = pendingVal;
            break;

        case "/":
            pendingVal += currentDisVal;
            currentDisVal = "";
            display[0].innerHTML = pendingVal;
            pendingVal += clickedBtn;
            display[0].innerHTML = pendingVal;
            break;

        case "*":
            pendingVal += currentDisVal;
            currentDisVal = "";
            display[0].innerHTML = pendingVal;
            pendingVal += '*';
            display[0].innerHTML = pendingVal;
        case "=":
            pendingVal += currentDisVal;
            display[0].innerHTML = pendingVal;
            let evaluation = eval(pendingVal);
            display[0].innerHTML = evaluation;
            (display[0].innerHTML).length = '7';
            pendingVal = '';
            displayTruncate()

            break;

        default:
            break;
    }
}

// function that clears everything on the display
function resetDisplay() {

    currentDisVal = '0',
        pendingVal = '',
        display[0].innerHTML = currentDisVal;
};

// function that defines a decimal
function addDecimal(event) {
    if (!currentDisVal.includes('.')) {
        currentDisVal += '.';
        display[0].innerHTML = pendingVal + currentDisVal;
        displayTruncate();


    };


}

// The delete button function
function deleteButton(){
    displayScreen = display[0].innerHTML;
    if (displayScreen.length >'0') {
        displayScreen = displayScreen.slice(0,-1);
        display[0].innerHTML = displayScreen;
        currentDisVal =''; pendingVal ='';
        displayTruncate();
        
    }else if (displayScreen.length < '1'){
       displayScreen = '0';
       display[0].innerHTML = displayScreen;
       currentDisVal =''; pendingVal ='';
       displayTruncate();
    };

}

// A function that ensures no consecutive operator duplicates
function singleOperator(event) {
    clickedBtn = event.textContent;
    pendingArray = pendingVal.split('');
    for (i = 0; i < pendingArray.length; i++){
        if ((pendingArray[i] === clickedBtn) && (pendingArray[i] === pendingArray[i+1])){
            pendingArray.pop();
            pendingVal = pendingArray.join('');
            display[0].innerHTML = pendingVal;

        }else{
            continue;
        }
    }        
       

}
 // This function truncates the values displayed to 11 values in order to prevent text-overflow
function displayTruncate(){
    if (display[0].innerHTML.length > '11'){
        display[0].innerHTML = display[0].innerHTML.slice(0,11);
    }
};


// accessing input box
let inputBox = document.getElementById('inputBox');
// accessing buttons
let button = document.querySelectorAll('button');

let string = '';
// a for loop for each button
button.forEach(element => {
    //eventlistener for clicking any button
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            // evaluation of the numbers and then again
            // converting into string to display in inputbox
            string = String(eval(string));
            inputBox.value = string;
        } else if (b.target.innerText == 'AC') {
            string = '';
            inputBox.value = string;
        } else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string
        } else if (b.target.id == 'plusMinus') {
            string = String(-eval(string))
            inputBox.value = string;
        }
        else {
            string += b.target.innerText;
            inputBox.value = string;
        }
    })
})
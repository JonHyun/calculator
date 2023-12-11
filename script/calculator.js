const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('[data-value]');
const operateButtons = document.querySelectorAll('[data-action]');
let StoredNum = '';
let StoredNum2 = '';
let num1 = '';
let num2 = '';
let clickedOperator = '';


// Display setting for numbers 0 - 9 and decimal point

numButtons.forEach((button) => {
    button.addEventListener('click', (e) => {

        // Sets the first number and second numbers to be operated on
        
       if (display.innerText === '' && StoredNum === '') {
            display.innerText += e.target.dataset.value;
            StoredNum = display.innerText;  
        } else if (display.innerText !== '' && StoredNum === ''){
            display.innerText = '';
            display.innerText += e.target.dataset.value;
            StoredNum = display.innerText; 
            clickedOperator = '';
        } else if (StoredNum !== '' && clickedOperator === '') {
            display.innerText += e.target.dataset.value;
            StoredNum = display.innerText; 
        } else {
            display.innerText += e.target.dataset.value;
            StoredNum2 = display.innerText;
        }
        
    })   
})

// Display setting for operator buttons and equal button

operateButtons.forEach((button) => {
    button.addEventListener('click', (e) => {

        let num1 = parseFloat(StoredNum);

        // Alert popup to enter a value before pressing equals

        if (e.target.dataset.action === '=' && StoredNum === '') {
            alert('Please enter a value first');
        } 

        // Assigns dataset action to Operator variable
        
        switch(e.target.dataset.action) {
            case '+':
                clickedOperator = '+'
                break;
            case '-':
                clickedOperator = '-'
                break;
            case '*':
                clickedOperator = '*'
                break;
            case '/':
                clickedOperator = '/'
                break;
            case 'AC':
                clickedOperator = 'AC'
        }

        display.innerText = '';

        let num2 = parseFloat(StoredNum2);
       
        // From assigned Operator variable, returns basic operations of 2 numbers

       if (e.target.dataset.action === '=' && num1 !== '' && num2 !== '') {
            switch(clickedOperator) {
                case '+':
                    display.innerText = num1 + num2
                    StoredNum = ''
                    StoredNum2 = ''
                    break;
                case '-':
                    display.innerText = num1 - num2
                    StoredNum = ''
                    StoredNum2 = ''
                    break;
                case '*':
                    display.innerText = num1 * num2
                    StoredNum = ''
                    StoredNum2 = ''
                    break;
                case '/':
                    display.innerText = num1 / num2
                    StoredNum = ''
                    StoredNum2 = ''
            }
       }

       // Clears all the variables

       if (clickedOperator === 'AC') {
            num1 = '';
            num2 = '';
            display.innerText = '';
            clickedOperator = '';
            StoredNum = '';
            StoredNum2 = '';
       }

       // Deletes previous variable or operator
       
        if (e.target.dataset.action === 'DEL' && num1 !== '' && clickedOperator !== '' && num2 !== '') {
            num2 = '';
            StoredNum2 = '';
        }  else if (e.target.dataset.action === 'DEL' && num1 !== '' && clickedOperator !== '') {
            clickedOperator = '';

        }  else if (e.target.dataset.action === 'DEL' && num1 !== '') {
            num1 = '';
            StoredNum = '';
        }
        
    })
    
})

   
 

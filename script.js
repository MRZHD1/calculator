let firstNum = NaN
let operator = NaN
let secondNum = NaN
const screen = document.querySelector('.screen')


function num(num) {
    input = num.toString()
    if (!firstNum) {
        firstNum = input
        screen.textContent = `${firstNum}`
    }
    else if (!operator) {
        firstNum += input
        screen.textContent = `${firstNum}`
    }
    else {
        if (!secondNum) {
            secondNum = input
            screen.textContent = `${firstNum} ${operator} ${secondNum}`
        }
        else {
            secondNum += input
            screen.textContent = `${firstNum} ${operator} ${secondNum}`
        }
    }
    
}

function operate(operation) {
    if (!firstNum) {
        return
    }
    else if (!secondNum && operation != '=') {
        operator = operation
        screen.textContent = `${firstNum} ${operation}`
    }
    else if (operation == '=' && !(!secondNum) || !(!firstNum) && !(!secondNum)){
        if (!(operation == '=')) {
            firstNum = evaluate(firstNum, operator, secondNum)
            operator = operation
            screen.textContent = `${firstNum} ${operator}`
        }
        else {
            firstNum = evaluate(firstNum, operator, secondNum)
            screen.textContent = `${firstNum}`
            operator = NaN
        }
        
        secondNum = NaN
    }
}

function evaluate(a, operation, b) {
    if (operation == '+'){result = parseFloat(firstNum) + parseFloat(secondNum)}
    else if (operation == '-'){result = parseFloat(firstNum) - parseFloat(secondNum)}
    else if (operation == '/'){
        if (b == 0) {
            del('clear')
            screen.textContent = `no.`
        }
        else{result = parseFloat(firstNum) / parseFloat(secondNum)}
    }
    else {result = parseFloat(firstNum) * parseFloat(secondNum)} // if operation == *

    if (result % 1 === 0) {
        return result.toString()
        }
    else {
        return result.toFixed(2).toString()
        }  
}

function del(op) {
    if (op == 'clear') {
        screen.textContent = '0'
        firstNum = NaN
        operator = NaN
        secondNum = NaN 
    }
    else {
        if (!operator && !secondNum && !(!firstNum)) {
            firstNum = firstNum.slice(0,-1)
            screen.textContent = `${firstNum}`
        }
        else if (!(!operator) && !(!secondNum)) {
            secondNum = secondNum.slice(0,-1)
            screen.textContent = `${firstNum} ${operator} ${secondNum}`
        }
        else if (!(!operator)) {
            operator = NaN
            screen.textContent = `${firstNum}`
        }
        
    }
}
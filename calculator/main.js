function calculate(operator) {

    const input1 = parseInt(document.getElementById("input1").value);
    const input2 = parseInt(document.getElementById("input2").value);

    if (operator === '+') {
        setResult(input1+input2);
    } else if (operator === '-') {
        setResult(input1-input2);
    } else if (operator === '*') {
        setResult(input1*input2);
    } else if (operator === '/') {
        if(input2 === 0) {
            setResult("Div by Zero");
            return;
        }
        setResult(input1/input2);
    }
}



function setResult(result) {
    document.getElementById("result").value = result;
}

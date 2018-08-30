var op1 = 0, op2 = 0, operator = "", res = "", from = "";

function reset() {
    document.getElementById('res').value = "";
    op1 = 0;
    op2 = 0;
    operator = "";
    res = "";
    from = "";
}

function insertOperand(operand) {
    if (from == "calculate") {
        reset();
    } else if (from == "operator") {
        document.getElementById('res').value = "";
    }

    document.getElementById('res').value += operand;
    from = "operand";
}

function insertOperator (op) {
    if ( op1 == 0) {
        op1 = document.getElementById('res').value;
    } else {
        if (from == "operand") {
            calculate();
        }
    }
    operator = op;
    from = "operator";
}

function calculate() {
    op2 = document.getElementById('res').value;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    switch (operator) {
        case '+':
            res = op1 + op2;
            break;
        case '-':
            res = op1 - op2;
            break;
        case '*':
            res = op1 * op2;
            break;
        case '/':
            if (op2 == 0) {
                res = 0;
            } else {
                res = op1 / op2;
            }
            break;
    }

    document.getElementById('res').value = res;
    op1 = res;
    op2 = 0;
    operator = "";
    from = "calculate";
}
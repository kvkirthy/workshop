var Calculator = (function () {
    function Calculator(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calculator.prototype.sum = function () {
        return this.num1 + this.num2;
    };
    Calculator.prototype.deduct = function () {
        return this.num1 - this.num2;
    };
    Calculator.prototype.multiply = function () {
        return this.num1 * this.num2;
    };
    Calculator.prototype.divide = function () {
        return this.num1 / this.num2;
    };
    Calculator.calculate = function (op) {
        var elmNum1 = Number(document.getElementById("num1").value);
        var elmNum2 = Number(document.getElementById("num2").value);
        var resultElm = document.getElementById("result");
        var calc = new Calculator(elmNum1, elmNum2);
        switch (op) {
            case "+":
                resultElm.innerText = calc.sum().toString();
                break;
            case "-":
                resultElm.innerText = calc.deduct().toString();
                break;
            case "*":
                resultElm.innerText = calc.multiply().toString();
                break;
            case "/":
                resultElm.innerText = calc.divide().toString();
                break;
            default:
                console.error("invalid operator");
        }
    };
    return Calculator;
}());

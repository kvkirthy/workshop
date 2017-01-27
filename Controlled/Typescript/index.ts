class Calculator
{
  
    constructor(private num1:number, private num2:number){

    
    }

    sum():number{
        return this.num1 + this.num2;
    }

    deduct(): number{
        return this.num1 - this.num2;
    }

    multiply(): number{
        return this.num1 * this.num2;
    }

    divide(): number{
        return this.num1 / this.num2;
    }

    static calculate(op){
        var elmNum1 = Number((document.getElementById("num1") as HTMLInputElement).value);
        var elmNum2 = Number((document.getElementById("num2") as HTMLInputElement).value);
        var resultElm = document.getElementById("result");
        var calc = new Calculator(elmNum1, elmNum2);
        
        switch(op){
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
    }

}
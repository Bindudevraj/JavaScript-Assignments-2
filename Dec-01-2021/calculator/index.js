var Calculator={
    "result" :0,
    "num1": 0,
    "num2": 0,
    "operator": 0,
    "add":function(num1,num2){
        result = this.num1 + this.num2;
        return result;
    },
    "mul":function(num1,num2){
        result = this.num1 * this.num2;
        return result;
    },
    "div":function(num1,num2){
        result = this.num1 / this.num2;
        return result;
    },
    "diff":function(num1,num2){
        result = this.num1 - this.num2;
        return result;
    },
}
Calculator.num1 = parseFloat(prompt('Enter first number: '));
Calculator.num2 = parseFloat(prompt('Enter first number: '));
operator = prompt("Enter the operation to be performed(Option should be +,-,*,/)");
switch(operator){
    case "+":
        var add_num = Calculator.add();
        console.log("The sum of two number:",`${Calculator.num1} + ${Calculator.num2} = ${add_num}`);
        break;

    case "*":
        var mul_num = Calculator.mul();
        console.log("The product of two number:",`${Calculator.num1} * ${Calculator.num2} = ${mul_num}`);
        break;

    case "/":
        var div_num = Calculator.div();
        console.log("The quotient of two number:",`${Calculator.num1} / ${Calculator.num2} = ${div_num}`);
        break;
    
    case "-":
        var diff_num = Calculator.diff();
        console.log("The diffence of two number:",`${Calculator.num1} - ${Calculator.num2} = ${diff_num}`);
        break;

    default:
        console.log("Invalid Operator");
        break;
}



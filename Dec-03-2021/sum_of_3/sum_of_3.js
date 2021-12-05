let tot = function(a){
    let b = function(b){
        let c = function(c){
            let sum = a + b + c;
            console.log("The sum of three numbers", a, b, "and", c , "is", sum)
        }
        return c;
    }
    return b;
}
var a = parseInt(prompt("Enter the first number:"));
var b = parseInt(prompt("Enter the second number:"));
var c = parseInt(prompt("Enter the third number:"));
tot(a)(b)(c);

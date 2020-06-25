function functionOuter(){
    var outerVariable = "one";

    return function innerFunction(){
        var innerVariable = "two";
        return outerVariable + innerVariable;
    };
}

var innerMethod = functionOuter();

console.log(innerMethod());

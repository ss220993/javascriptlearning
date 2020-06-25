
function mul(a, b) { 
    return a*b;
}

console.log(mul(5,10))

function Animal(legs, name) { 
    this.legs = legs;
    this.name = name;
    return this.name;
}
console.log(Animal(4, "CAT")); 
var animal = new Animal(1, "dog"); 

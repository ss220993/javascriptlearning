function Parent(mother, father){
  this.mother = mother
  this.father = father

  Parent.count = 2;
  Parent.prototype.child = {} ;

}

Parent.prototype.properties = true;
Parent.prototype.print = function(){
	console.log("parents count");
	console.log(Parent.count)
	console.log(this.child.name);
}

var parent1 = new Parent("mother", "father");
parent1.child.name = "subha"

console.log(parent1.child.name)
console.log(parent1.print())

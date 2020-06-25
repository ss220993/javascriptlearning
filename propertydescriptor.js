function House(id, name) {
    this.id = id; 

    Object.defineProperty(this,
        "door",
        { value: "wood", enumerable: true, configurable: false } 
        );
    
        Object.defineProperty(this,
            "backyard",
            { value: "empty", writable: true, enumerable: true, configurable: false }
        );
}
let house = new House(1, "new house");
house.id = 420;
house.door = "teak";
console.log(house)
house.backyard = "full";
console.log(house.backyard); 

Object.freeze(house) 
house.size = "big";

console.log(house)

function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    calcPerimeter = function() {
        let perimeter = this.sideLength * this.sides;
        console.log(perimeter);
    };
}

let square = new Shape('square', 4, 5);

// Write your code below here
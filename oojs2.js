function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.calcPerimeter = function() {
        let perimeter = this.sideLength * this.sides;
        console.log(perimeter);
    };
}

let square = new Shape('square', 4, 5);

let triangle = new Shape('triangle', 3, 5);

// Write your code below here
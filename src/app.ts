// Import the p5 library
import p5 from "p5";

// Define the sketch
const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.fill(255, 0, 0);
    p.ellipse(p.width / 2, p.height / 2, 100, 100);
  };
};

// Create a new p5 instance
new p5(sketch);

// Base class for shapes
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="120" y="80" width="240" height="160" fill="${this.color}" />`;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="300" cy="200" r="160" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="300, 36 488, 360 86, 360" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };

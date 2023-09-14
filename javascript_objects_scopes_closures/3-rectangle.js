//#!/usr/bin/node

const Rectangle = require("./0-rectangle");

module.exports = class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)){
        return {};
    }
    else{
        this.width = w;
        this.height = h;
    }
  }
  print(){
    console.log("XX");
  }
  
};

myRectangle = new Rectangle();
myRectangle.print


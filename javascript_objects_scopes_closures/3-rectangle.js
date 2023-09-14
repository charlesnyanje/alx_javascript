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
    for(let i=0; i<this.height; i++){
        console.log("X".repeat(this.width));
    }
  }
};

myRectangle = new Rectangle();




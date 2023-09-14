#!/usr/bin/node

const Rectangle = require("./0-rectangle");

module.exports = class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)){
        let myObj = {};
    }
    else{
        this.width = w;
        this.height = h;
    }
  }
  
};

x = new Rectangle()

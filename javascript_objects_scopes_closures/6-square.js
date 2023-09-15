//#!/usr/bin/node

const parentSquare = require("./5-square");

module.exports = class Square extends parentSquare {
  constructor(size) {
    super(size);
  }


  charPrint(c = "X") {
    if (typeof c !== "string" || c.length !== 1) {
      throw new Error("c must be a single character");
    }

    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
};

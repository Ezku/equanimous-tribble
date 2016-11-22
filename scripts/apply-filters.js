"use strict";

const fs = require("fs");
const path = require("path");

const guessTableHeaders = require("./filters/guess-table-headers");
const shortCaptions = require("./filters/short-captions");

class File {
  static read(filename) {
    return new File(
      filename,
      fs.readFileSync(filename, "utf8")
    );
  }

  static write(file) {
    fs.writeFileSync(file.filename, file.content);
  }

  constructor(filename, content) {
    this.filename = filename;
    this.content = content;
  }

  map(f) {
    return new File(this.filename, f(this.content));
  }
}

process.argv.slice(2)
  .map(File.read)
  .map(guessTableHeaders)
  .map(shortCaptions)
  .forEach(File.write);

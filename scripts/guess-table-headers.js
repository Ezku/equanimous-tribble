"use strict";

const fs = require("fs");
const path = require("path");

// \\\noalign{\medskip}
// \hline\noalign{\medskip}
const TABLE_HEADER_POSITION =
  [
    ["\\\\", command("noalign"), argument(command("medskip"))].join(""),
    [command("hline"), command("noalign"), argument(command("medskip"))].join("")
  ].join("\n");

// \\endhead
const TABLE_HEADER = command("endhead");

function command(cmd) {
  return "\\" + cmd;
}

function argument(arg) {
  return "{" + arg + "}";
}

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
  .map(function guessTableHeaders(file) {
    return file.map(function(content) {
      return content.replace(
        TABLE_HEADER_POSITION,
        [TABLE_HEADER_POSITION, TABLE_HEADER].join("\n")
      )
    });
  })
  .forEach(File.write);

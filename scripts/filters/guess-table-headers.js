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


module.exports = function guessTableHeaders(file) {
  return file.map(function(content) {
    return content.replace(
      TABLE_HEADER_POSITION,
      [TABLE_HEADER_POSITION, TABLE_HEADER].join("\n")
    )
  });
}

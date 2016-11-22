
const OPEN_BRACE = "\\{"
const ESCAPED_OPEN_BRACKET = "\\{\\[\\}"
const ESCAPED_CLOSE_BRACKET = "\\{\\]\\}"

const SHORT_CAPTION_TAGS = [
  OPEN_BRACE,
  ESCAPED_OPEN_BRACKET,
  "([^{]+)",
  ESCAPED_CLOSE_BRACKET
].join("");

module.exports = function shortCaptions(file) {
  return file.map(function(content) {
    debugger
    return content.replace(
      new RegExp(SHORT_CAPTION_TAGS, 'gm'),
      "[$1]{$1"
    );
  })
}

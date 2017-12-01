module.exports = function (str) {
  return str
    .split('')
    .map(toint)
    .filter(function (num, i, all) {
      var next = all[(i + 1) % all.length]
      return num === next
    })
    .reduce(add)
}
function toint (ch) { return parseInt(ch, 10) }
function add (a, b) { return a + b }

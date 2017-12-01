#!/usr/bin/env node

module.exports = function (str) {
  return str
    .split('')
    .map(toint)
    .filter(function (num, i, all) {
      var next = all[(i + all.length / 2) % all.length]
      return num === next
    })
    .reduce(add)
}
function toint (ch) { return parseInt(ch, 10) }
function add (a, b) { return a + b }

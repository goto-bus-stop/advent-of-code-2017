module.exports = function checksum (spreadsheet) {
  return spreadsheet.split('\n')
    .filter(Boolean)
    .map(splitrow)
    .map(difference)
    .reduce(add)
}

function splitrow (row) { return row.split(/\s+/g).map(toint) }
function toint (n) { return parseInt(n, 10) }
function difference (row) { return Math.abs(Math.max.apply(null, row) - Math.min.apply(null, row)) }
function add (a, b) { return a + b }

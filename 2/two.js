module.exports = function checksum (spreadsheet) {
  return spreadsheet.split('\n')
    .filter(Boolean)
    .map(splitrow)
    .map(evendivision)
    .reduce(add)
}

function splitrow (row) { return row.split(/\s+/g).map(toint) }
function toint (n) { return parseInt(n, 10) }
function evendivision (row) {
  for (var a = 0; a < row.length; a++) {
    for (var b = 0; b < row.length; b++) {
      if (row[a] === row[b]) continue
      var result = row[a] / row[b]
      if (Math.round(result) === result) { return result }
    }
  }
}
function add (a, b) { return a + b }

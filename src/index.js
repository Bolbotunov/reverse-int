module.exports = function reverse (n) {
let a = String(n).split('')
let b = Number(a.reverse().join(''))
return b
}
reverse(n)


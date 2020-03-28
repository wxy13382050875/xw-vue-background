String.prototype.PadRight = function (len, charStr = '') {
  let s = this + ''
  for (let i = s.length; i <= len; i++) {
    s += charStr
  }
  return s
}
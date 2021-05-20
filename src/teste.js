function validate(str) {
    const isString =  typeof str === 'string' ? true : false
    const validation1 = !str.startsWith("]") || str.startsWith(")") || str.startsWith("}")
    const validation2 = !str.endsWith("[") || str.endsWith("(") || str.endsWith("{")
    const validation = validation1 && validation2
    return isString && validation 
  }

  module.exports = validate
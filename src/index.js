function validate(str) {
    const isString =  typeof str === 'string' ? true : false
    const validation1 = !str.startsWith("]") || str.startsWith(")") || str.startsWith("}")
    const validation2 = !str.endsWith("[") || str.endsWith("(") || str.endsWith("{")
    const validation = validation1 && validation2
    return isString && validation 
  }
  
  const str = "]string]" //Return false, the string was open incorrectly
  const str2 = "[string]" // Return True,the string was open correctly

//IF str2 has {} or () is true anyway,

//Teste
console.log(validate(str)) //Test
console.log(validate(str2)) //

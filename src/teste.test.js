
const validate = require('./teste.js');

test('Validate the string', () => {
  expect(validate("[3]")).toBe(true);
}); //Sucess
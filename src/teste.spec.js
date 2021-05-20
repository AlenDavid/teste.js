
const validate = require('./teste.js');

test('Validate the string', () => {
  expect(validate("[3]")).toBe(true);
});

describe('[Test] validate right and wrong strings', () => {
  test('correct strings', () => {
    const strs = [
      '',
      'abc',
      'a()b[]{c}',
      'a()b()c(e)i(d)',
      '(f(g([hick]{s: c})))',
      '[[[][]](){()}]'
    ]

    for (str of strs) {
      expect(validate(str)).toBe(true)
    }
  })

  test('incorrect strings', () => {
    const strs = [
      'a[',
      '[[d]',
      'g(]hi',
      '}{',
      '((ad((e([[fj][i))k)',
      '1}{{3}}}r()'
    ]

    for (str of strs) {
      expect(validate(str)).toBe(false)
    }
  })
})
const myLib = require('../src/index')

describe('mylib says', () => {
  describe('saiHi', () => {
    it('should be a string', () => {
      expect(typeof myLib.sayHi).toBe('string')
    })

    it('should return `Hi`', () => {
      expect(myLib.sayHi).toBe('Hi')
    })
  })
})

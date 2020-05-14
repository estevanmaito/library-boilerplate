const myLib = require('../src/index')

describe('mylib says', () => {
  describe('sayHi', () => {
    it('should be a string', () => {
      expect(typeof myLib.sayHi).toBe('string')
    })

    it('should return `Hi`', () => {
      expect(myLib.sayHi).toBe('Hi')
    })
  })

  describe('sayBye', () => {
    it('should be a string', () => {
      expect(typeof myLib.sayBye).toBe('string')
    })
  })

  describe('sing', () => {
    it('should sing a song', () => {
      expect(myLib.sing).toBe('Welcome to the jungle')
    })
  })
})

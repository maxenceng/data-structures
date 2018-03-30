export default class FizzBuzz {
  constructor() {
    this.data = new Array(100)
      .fill(null)
      .map((value, i) => (i + 1) % 3 === 0 ? 'Fizz' : i + 1)
      .map((value, i) => (i + 1) % 5 === 0 ? 'Buzz' : value)
      .map((value, i) => (i + 1) % 15 === 0 ? 'FizzBuzz' : value)
  }
}

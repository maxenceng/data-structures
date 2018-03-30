export default class Stack {
  constructor() {
    this.data = []
  }

  insert = value => this.data.push(value)
  contains = value => this.data.find(el => el === value)
  remove = () => this.data.pop()
  size = () => this.data.length
  peek = () => this.data[this.data.length - 1]
}

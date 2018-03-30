export default class Queue {
  constructor() {
    this.data = []
  }

  enqueue = value => this.data.push(value)
  dequeue = () => this.data.shift()
  front = () => this.data[0]
  size = () => this.data.length
  isEmpty = () => this.data.length === 0
}

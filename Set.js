export default class Set {
  constructor(...values) {
    this.data = values
  }

  insert = value => this.data.push(value)
  contains = value => this.data.find(el => el === value)
  remove = value => this.data = this.data.filter(el => el !== value)
  size = () => this.data.length

  union = set => new Set(...this.data, ...set.data)
  intersection = set => new Set(...this.data.filter(el => set.contains(el)))
  difference = set => this.data.filter(el => !set.contains(el))
  subset = set => this.data.every(el => set.contains(el))
}

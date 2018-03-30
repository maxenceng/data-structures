export default class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }

  insert = (value) => {
    if (!this.next) return this.next = new LinkedList(value)
    return this.next.insert(value)
  }

  contains = (value) => {
    if (this.value === value) return true
    if (!this.next) return false
    return this.next.contains(value)
  }

  remove = (value) => {
    if (!this.next || !this.contains(value)) return false
    if (this.next.value === value) {
      if (!this.next.next) return this.next = null
      return this.next = this.next.next
    }
    return this.next.remove(value)
  }

  edit = (value, replacement) => {
    if (!this.contains(value)) return false
    if (this.value === value) return this.value = replacement
    return this.next.edit(value, replacement)
  }

  size = () => {
    if (!this.next) return 1
    return this.next.size() + 1
  }
}

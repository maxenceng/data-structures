export default class BST {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }

  insert = (value) => {
    if (value <= this.value) {
      if (!this.left) return this.left = new BST(value)
      return this.left.insert(value)
    }
    if (!this.right) return this.right = new BST(value)
    return this.left.insert(value)
  }

  contains = (value) => {
    if (this.value === value) return true
    if (value < this.value) {
      if (!this.left) return false
      return this.left.contains(value)
    }
    if (!this.right) return false
    return this.right.contains(value)
  }

  getMin = () => {
    if (!this.left) return this.value
    return this.left.getMin()
  }

  getMax = () => {
    if (!this.right) return this.value
    return this.right.getMax()
  }

  getNode = (value) => {
    if (!this.contains(value)) return null
    if (value === this.value) return this
    if (value < this.value) {
      if (!this.left) return null
      return this.left.getNode(value)
    }
    if (!this.right) return null
    return this.right.getNode(value)
  }

  remove = (value) => {
    if ((!this.left && !this.right) || !this.contains(value)) return false
    if (value < this.value) {
      if (!this.left) return false
      if (this.left.value !== value) return this.remove(value)
      return this.left = null
    }
    if (!this.right) return null
    if (this.right.value !== value) return this.right.remove(value)
    return this.right = null
  }

  edit = (value, replacement) => {
    if (!this.contains(value)) return false
    if (this.value === value) return this.value = replacement
    if (value < this.value) {
      if (!this.left) return false
      return this.left.edit(value, replacement)
    }
    if (!this.right) return false
    return this.right.edit(value, replacement)
  }
}

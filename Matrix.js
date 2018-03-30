export default class Matrix {
  constructor(...values) {
    this.data = new Array(values.length).fill().map(() => values)
  }

  flatten = () => this.data.flatten()
  insertRow = (row) => {
    if (this.data[0].length !== row.length) return false
    return this.data.push(row)
  }
  insertCol = (col) => {
    if (this.data.length !== col.length) return false
    return this.data = this.data.map((row, index) => row.push(col[index]))
  }
  isSquare = () => this.data.length === this.data[0].length
  isDiagonal = () => this.data.every((row, i) => row.every((el, j) => {
    if (i !== j && el !== 0) return false
    return true
  }))
  isUpperTriangular = () => this.data.every((row, i) => row.every((el, j) => {
    if (i < j && el !== 0) return false
    return true
  }))
  isLowerTriangular = () => this.data.every((row, i) => row.every((el, j) => {
    if (i > j && el !== 0) return false
    return true
  }))
  isTriangular = () => this.isLowerTriangular() || this.isUpperTriangular()
}

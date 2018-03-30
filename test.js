import BST from './BST'
import LinkedList from './LinkedList'
import Set from './Set'
import Matrix from './Matrix'
import FizzBuzz from './FizzBuzz'

const Tree = new BST(15)
const List = new LinkedList(5)

/* eslint-disable no-console */
List.insert(10)
console.log(Tree.contains(10))
List.remove(10)
console.log(Tree.contains(10))
List.insert(15)
List.insert(10)
List.insert(20)
List.remove(15)
List.remove(15)
List.remove(20)
List.edit(9, 11)
List.edit(10, 12)
console.log('---')
console.log(List.contains(20))
console.log(List.contains(15))
console.log(List.contains(10))
console.log(List.contains(12))
console.log(List.size())
List.insert(4)
console.log(List.size())

const newSet = new Set(15, 10, 2)
const otherSet = new Set(15)

console.log(newSet.data)
console.log('///')
console.log(newSet.union(otherSet).data)
console.log(newSet.intersection(otherSet).data)
console.log(newSet.difference(otherSet))
console.log(otherSet.subset(newSet))

const matrix = new Matrix(5, 10, 211, 39847)
console.log(matrix.isTriangular())

const fizzBuzz = new FizzBuzz()
console.log(fizzBuzz.data)
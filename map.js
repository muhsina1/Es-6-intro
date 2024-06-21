const numbers =[2, 4, 8, 6, 9]

//const double =[]
//for(const num of number){
   /// const doubled = num*2
    //double.push(doubled)
//}
//console.log(double)

const doubleIt = num => num*2
const result = numbers.map(doubleIt)
console.log(result)

const integer =[5, 12, 50, 8, 7]
const threeAdded = integer.map(num => num+3)
console.log('three added', threeAdded)

const count =[5, 2, 3, 4, 8]
const square = count.map(num=> num*num)
console.log('square',square)
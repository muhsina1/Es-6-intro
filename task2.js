// task 1 with map
const numbers =[1, 3, 5, 7, 9]
const convertEven = numbers.map(odd=>odd+1)
console.log(convertEven)

//task 2 with filter
const num =[33, 50, 79, 78, 90, 101, 30]
const divisibleTen = num.filter(array=> array%10==0)
console.log(divisibleTen)

// with object task 3
const instructor =[
    {name: 'node', age:24, position:'senior'},
    {name: 'Akhi', age:20, position:'Junior'},
    {name: 'rodela', age:24, position:'senior'},

]

const seniorName = instructor.filter(n=>n.position=='senior')
//console.log(seniorName)
const sName = seniorName.map(na=> na.name)
console.log(sName)


// task 4 another task age sum
const ageNumber = instructor.map(a=> a.age)
console.log(ageNumber)

const sumAge = ageNumber.reduce((p, c)=> p+c, 0)
console.log(sumAge)
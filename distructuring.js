const identy ={
    name: 'Muhsina',
    studentID : 22591000,
    age : 25

}

const {studentID:rollNo} = identy
//console.log(studentID)
console.log(rollNo)

//array distructuring

function numbersDouble(a, b){
    return [a*3, b*3]

}

const [number1, number2] =numbersDouble(2, 3)
console.log(number1, number2)

//adjusting array

const fruits =['apple', 'banana', 'orange']
const flower =['lily', 'hasnahena']
const result =[...fruits , ...flower]
console.log(result)

// for object porperties separate 
const person ={name:'Muhsina' , age:36, favoFood:'Thai soup', hobby:'using phone'}

const {hobby, ...rest} = person
console.log(hobby)
console.log(rest)
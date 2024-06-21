const add = (a, b) => a + b   //functions easy way
const sum =add(36, 9)
console.log(sum)


const num =(x, y, p, q) => x+y+p+q
const result = num(9, 50, 10, 20)
console.log (result)

//another way

const getID =(person) => person.studentID;
const student = {name: 'Muhsina' , studentID:22591000};
const studentID = getID(student);

console.log(studentID);


// for array number

const getNumberFromArray = (number) => number[1]
const numbersArray =([5, 9, 2, 10, 55])
const number = getNumberFromArray(numbersArray)
console.log(number)

//no parameter 
const getPI = () => Math.PI
console.log(getPI())

//large arrow function

const doMath = (x, y, z) => {
    const sum = x+y+z
    const mul =x*y*z
    const result =sum + mul
    return result
}

const doMathNumbers =doMath(3,2,10)
console.log(doMathNumbers)
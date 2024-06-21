const products =[
    {id:1, name:'Xiomi', price:25000},
    {id:2, name:'Samsung', price:45000},
    {id:3, name:'Nokia', price:75000},
    {id:4, name:'symphony', price:10000}
]

const names =products.map(product => product.name)
console.log(names)
const prices =products.map(product => product.price)
console.log(prices)
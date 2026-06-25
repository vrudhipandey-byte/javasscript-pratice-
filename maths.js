const score =400
console.log(score)

const balance = new Number(100)//ensrung its number not string 
console.log(balance)
console.log(balance.toString().length)//converting string into array,method
// console.log(typeof balance)
console.log(balance.toFixed(6))//used in ecommerce website ,method

const othernumber =234.56
console.log(othernumber.toPrecision(3))//round of type not sure about this method

const hunderds = 10000000000
console.log(hunderds.toLocaleString('en-IN'))///method 

// *****************************************
console.log(Math.abs(-8))//method converting + to -
console.log(Math.round(234.78956))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.89))
console.log(Math.min(2,45,678,2,3))
console.log(Math.max(234,12,34,5678))

console.log(Math.random())

const min =10
const max = 20
Math.random()


console.log(Math.floor(Math.random()*(max-min+1))+min)



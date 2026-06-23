let marks =[ 67,78,56,34,67]
// console.log(marks)
// console.log(marks.length)
// console.log(typeof marks)


// // *****array indices*****
// console.log(marks[3])//if want to acces the no from index
// console.log(marks[78]=56)//want to change the value

// *****looping over array*****

// //for loop
// for (let i=0; i<marks.length;i++){
//     console.log(marks[i]);
// }

//for of loop
// for(let mark of marks){
//     console.log(mark);

// }

// let names=[" khushi","avinash","aditya","yashika","ketan"]
// for(let c of names){
//     console.log("name=", c.toUpperCase(),"&length=",c.length )
    
    
// }
// let marks=[85,97,44,37,76,60]
// let sum=0;
// for(let i=0; i<marks.length;i++){
//     sum+=i;

// }
// let avg = sum/marks.length;
// console.log(avg)

// *****array in js******
// let fooditems =["chips","kurkure","icecream","pavbhaji"]
// fooditems.push("maggie")
// console.log(fooditems)
// fooditems.pop()
// console.log(fooditems)


// let number = [1,3,4,5,6,6]
// console.log(number.toString())

let marvel =["thor","spiderman ","ironman"]
let dc_hero = ["superman ", "batman"]
let indianhero = ["shaktiman","bheem"]
let heros = marvel.concat(dc_hero,indianhero)
// console.log(heros)
marvel.unshift("k")
console.log(marvel)
console.log(marvel.slice(1))//slice method





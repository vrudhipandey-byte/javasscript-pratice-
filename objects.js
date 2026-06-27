//singleton

//object literals

// const mysym = symbol("key1")

// const jsuser ={
//     name : "khushi",
//     "fullname":"khushi2",
//     mysym :"mykey1",
//     age:18,
//     location:"jaipur",
//     email:"khushi@gmail.com",
//     isLoggedIn:false,
// }
// // console.log(jsuser["email"])
// // Object.freeze=(jsuser)// value phire ham change nhi karpaenge
// // console.log(jsuser)

// jsuser.greetting = function(){
//     console.log(`hello js user`);
// }
// jsuser.greetingtwo = function(){
//     console.log(`hello js user${this.name}`)
// }
// console.log(jsuser.greeting())
// console.log(jsuser.greetingtwo);

const ob1 = {
    1: "a",2:"v",3:"c"
}   
const ob2 = {
    4:"s", 6:"q",8:"Z"
}
// const obj3 = Object.assign({} ,ob1,ob2)
const obj3 ={...ob1,...ob2}
console.log(obj3)

//destructure
const course ={
    course:"js in hindi ",
    price :"999",
    crouseinsrtuction:"hintesh",
}

// crouse.crouseinstruction
const{crouseinsrtructionn}=course
console.log(courseinstruction)

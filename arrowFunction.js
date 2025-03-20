   
//arrow function
const msg = ()=>{return console.log("Hello JS")}
//console.log(msg)
msg()

//write an arrow function to sum 2 numbers
const add= (a,b)=>{return console.log(a+b)}
add(13,56)

//default parameter
const mul=(a,b=2)=>{return a*b}
console.log(mul(4,5))
console.log(mul(4))

//rest parameter
// const mysum=(...n)=>{
	// let t=0
	// n.forEach((i)=>t=t+i)
	// console.log(t)
// }

const mysum=(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum(4,5,6,1,2))

//callbCK function
//A function passed as an argument
const myName =(name)=>{console.log("My name is "+name)}

const greet=(msg,myName)=>{
	console.log("Hi.."+msg)
}
greet("Good morning",myName("David"))

// const greet=(msg,fun)=>{
	// console.log("Hi.."+msg)
	// fun()
// }
// greet("Good morning",()=>{console.log("My name is David")})


const mulTwo=(n)=>n*2

const myarr=(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(mulTwo,4,5,6,8,2)
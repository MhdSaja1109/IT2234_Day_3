//Functions
function PrintMsg(){
	console.log("Hello JS")
}
PrintMsg()

function sum(){
	return 5+6
}
console.log(sum())

function sub(a,b){
	return a-b
}
console.log(sub(5,3))

//write a boolean function to find a given number is prime
function checkPrime(num) {
    if (num < 2) {
        console.log(`${num} is not a prime number`);
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} is not a prime number`);
            return;
        }
    }
    console.log(`${num} is a prime number`);
}
checkPrime(7);  
checkPrime(10);


//write recursive function to print numbers from 1 to n
function printNumbers(n, current = 1) {
       if (current > n) return;
       console.log(current);
       printNumbers(n, current + 1);
   }
   let n = 10;
   printNumbers(n);
// Step 1
const age:number = 31
console.log(age)

//Step 2
for (let i = 1; i <= age; i++) {
    console.log(i)
}

//Step 3
let message: string

if (age > 18) {
    message = "du bist Volljährig"
} else {
    message = ("du bist noch Minderjährig")
}
console.log(message)

//Step 4
const score:number = 13;
console.log(score)

//Step 5
if (score !== 0) {
    console.log("Score is available.");
}

//Step 6
if (score) {
    console.log("Score is evaluated as truthy.");
} else {
    console.log("Score is evaluated as falsy.");
}

//Step 7
const username:string = "";

//Step 8
if (username !== "") {
    console.log("Username is available.")
}

//Step 9
if(!username) {
    console.log("Username is evaluated as falsy.")
} else {
    console.log("Username is evaluated as truthy.")
}

//Step 10
const isAdmin:boolean = false;

//Step 11
if(isAdmin ) {
    console.log("isAdmin is evaluated as truthy.")
} else {
    console.log("isAdmin is evaluated as falsy.")
}

//Step 12
if(!isAdmin) {
    console.log("isAdmin has the value false")
}


// Bonus
const n: number = 5;

for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
}


for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - 1) + '*')
}




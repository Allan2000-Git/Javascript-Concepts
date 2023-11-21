function BankAccount(customerName, balance=1000){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.depositAmount = function (amount) {
    //     this.balance += amount;
    // };

    // this.withdrawAmount = (amount) => {
    //     this.balance -= amount;
    // };
}

const newUser = new BankAccount("User1", 5000)

// Problem: we are creating depositAmount and withdrawAmount methods everytime we create a object; wastage of memory space

// Prototype: whenever we create a function, it creates an empty object for it (prototype); we can add properties to that object

BankAccount.prototype.test = "this is a test property"

BankAccount.prototype.depositAmount = function(amount){
    this.balance += amount
}

// cannot use arrow functions with Prototype because "this" refers to window object and not it's context
BankAccount.prototype.withdrawAmount = function(amount){
    this.balance -= amount
}

// method is available due to prototype chaining. if its not found in its scope, then it goes to inner prototype
newUser.depositAmount(3000)

// console.log(BankAccount.prototype);
// console.log(newUser);

//=============================================================================================================

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

// injecting new method into main prototype object; applicable on all objects
Object.prototype.allan = function(){
    console.log(`allan is present in all objects`);
}

// applicable only on arrays
Array.prototype.heyAllan = function(){
    console.log(`Allan says hello`);
}

myHeros.heyAllan()
heroPower.heyAllan()
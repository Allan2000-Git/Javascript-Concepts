// function BankAccount(customerName, balance = 1000) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount;
// };

//  // ---------
// function CurrentAccount(customerName, balance = 1000) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log('Taking business loan: ' + amount);
// };

// // ---------
// function SavingAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 10000;
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('Taking personal loan: ' + amount);
// };

// const user1 = new SavingAccount('Allan', 5000);
// user1.deposit(500);
// user1.withdraw(100);
// user1.takePersonalLoan(40000);

// ===========================================================================================

class BankAccount{
    constructor(customerName, balance = 1000) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    };

    withdraw(amount) {
        this.balance -= amount;
    };
}

class CurrentAccount extends BankAccount{
    constructor(customerName, balance = 1000){
        super(customerName, balance)
        this.transactionLimit = 50000;
    }

    takeBusinessLoan(amount) {
        console.log('Taking business loan: ' + amount);
    };
}

class SavingAccount extends BankAccount{
    constructor(customerName, balance = 1000){
        super(customerName, balance)
        this.transactionLimit = 10000;
    }

    takePersonalLoan(amount) {
        console.log('Taking personal loan: ' + amount);
    };
}

const user1 = new SavingAccount('Allan', 5000);
user1.deposit(500);
user1.withdraw(100);

console.log(user1);

user1.takePersonalLoan(5000)
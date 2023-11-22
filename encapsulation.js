class BankAccount {
    customerName;
    accountNumber;
    #balance = 0; // # -> private property

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    // setBalance(amount) {
    //     if (isNaN(amount)) {
    //         throw new Error('Amount is not a valid input');
    //     }
    //     this.#balance = amount;
    // }

    // getBalance() {
    //     return this.#balance;
    // }

    // getters & setters
    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error('Amount is not a valid input');
        }
        this.#balance = amount;
    }

    get balance() {
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    #calculateInterest(amount) {
        console.log('Calculating interest for the amount: ' + amount);
    }

    takeBusinessLoan(amount) {
        this.#calculateInterest(amount);
        console.log('Taking business loan: ' + amount);
    }
}

const user1 = new CurrentAccount('Rakesh K', 2000);
user1.takeBusinessLoan(40000);

// user1.balance = 50000 // set the balance
// console.log(user1.balance); // get the balance
console.log(user1);
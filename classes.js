class BankAccount{

    constructor(customerName, balance = 1000){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    // good practice

    depositAmount(amount) {
        this.balance += amount;
    };

    withdrawAmount(amount) {
        this.balance -= amount;
    };
}

const newUser = new BankAccount("User1", 5000)

newUser.depositAmount(10000)
newUser.withdrawAmount(1000)

console.log(newUser);
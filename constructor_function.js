function BankAccount(customerName, balance=1000){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // not a good practice to do this
    this.depositAmount = function (amount) {
        this.balance += amount;
    };

    this.withdrawAmount = (amount) => {
        this.balance -= amount;
    };
}

// creates a memory space for each instance created by BankAccount
const newUser = new BankAccount("User1", 5000)
const newUser1 = new BankAccount("User2")

newUser.depositAmount(10000)
newUser.withdrawAmount(2000)
console.log(newUser);
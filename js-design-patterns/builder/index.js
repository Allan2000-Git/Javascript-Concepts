// Builder design pattern helps to create the objects with only required values, for this, 
// we can create a no-args constructor and then build the object step-by-step and then get the final result from it.

class Payment {
    constructor(currency = '₹', amount = 0) {   
        this.currency = currency;
        this.amount = amount;
    }

    addAmount = function(val){
        this.amount += val;
        return this;
    }

    addCurrency = function(currency){
        this.currency = currency;
        return this;
    }

    pay = function(){
        console.log(`${this.currency} ${this.amount}`);
    }
}

const p1 = new Payment();

p1.addAmount(100).addAmount(200).addAmount(200).pay();
//"₹ 500"

p1.addAmount(200).addCurrency('$').pay();
//"$ 700"
// software entities must be (functions, classes) open for extension but closed for modification

// Open for extension — we are able to extend what the module does.
// Closed for modification — extending the behavior of a module does not result in changes to the source or binary code of the module.

interface IPaymentProcessor {
    processPayment(amount: number): void;
}

class PaymentProcessor {
    processor: IPaymentProcessor;

    constructor(paymentProcessor: IPaymentProcessor) {
        this.processor = paymentProcessor;
    }

    processPayment(amount: number) {
        this.processor.processPayment(amount);
    }
}

class CreditCardProcessor implements IPaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing credit card payment of ${amount}`);
    }
}

class PaypalProcessor implements IPaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing paypal payment of $${amount}`);
    }
}

const creditCardProcessor = new CreditCardProcessor();
const paypalProcessor = new PaypalProcessor();
const processor = new PaymentProcessor(paypalProcessor);
processor.processPayment(100);

/*
A class or a module should have only one reason to change
OR
Each module should be responsible to one, and only one, actor (user or stakeholder)
*/

class Product {
    constructor(name, price) {
        this.id = Date.now();
        this.name = name;
        this.price = price;
    }
}

class Order {
    products = [];

    addProduct(product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    removeProduct(productId) {
        this.products = this.products.filter((product) => product.id !== productId);
    }
}

class PricingCaluculator {
    calculatePricing(products) {
        return products.reduce((total, product) => total + product.price, 0);
    }
}

class PaymentProcessor {
    processPayment(orders) {
        orders.map((order) => {
            console.log(`Processing payment for Order: ${order.id}`);
        })
        console.log('Payment processed successfully!');
        console.log('Added to accounting system!');
        console.log('Email sent to customer!');
    }
}

class Invoice {
    generateInvoice(products, amount) {
        console.log(`
Invoice Date: ${new Date().toDateString()}
-------------------------------
Product Name\tPrice
                `);

        products.forEach((product) => {
            console.log(`${product.name}\t\t${product.price}`);
        });
        console.log('-------------------------------');
        console.log(`Total: ${amount}`);
    }
}

const product1 = new Product('Laptop', 500);
const product2 = new Product('Iphone', 1000);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

const pricingCaluclator = new PricingCaluculator();
const total = pricingCaluclator.calculatePricing(order.getProducts());

const invoice = new Invoice();
invoice.generateInvoice(order.getProducts(), total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order.getProducts());

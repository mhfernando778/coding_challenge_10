// Task 1 - Creating a Product Class //
class Product { // starting a new class for products
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };
    getDetails() { // adding a method to list all the product information
        return `Product Name: ${this.name}, Product ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
    };

    updateStock(quantity) { // adding a method to keep track to stock after orders are placed
        return this.stock >= quantity ? this.stock -= quantity : `Order exceeds stock. Current Stock: ${this.stock}`
    };
}

const prod1 = new Product("Laptop", 101, 1200, 10); // introducing an instance into the class
console.log(prod1.getDetails()); // logging the details of that instance

prod1.updateStock(3); // an order being made
console.log(prod1.getDetails()); // logging the updated stock after the purchase
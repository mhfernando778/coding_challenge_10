// Task 1 - Creating a Product Class //
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };
    getDetails() {
        return `Product Name: ${this.name}, Product ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
    };

    updateStock(quantity) {
        return this.stock >= quantity ? this.stock -= quantity : `Order exceeds stock. Current Stock: ${this.stock}`
    };
}

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 

prod1.updateStock(3);
console.log(prod1.getDetails()); 
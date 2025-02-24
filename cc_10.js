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

// Task 2 - Creating an Order Class

class Order { // starting an new class for orders
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(quantity); // this is to update the stock count
    };

    getOrderDetails() { // returning the details of any certain order
        return `Order ID: ${this.orderId}, Product Name: ${this.product}, Order Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`
    };
}

const order1 = new Order(501, prod1, 2); // creating a new instance
console.log(order1.getOrderDetails());  // logging the details of the first order

console.log(prod1.getDetails()); // logging the details of the product


// Task 3 - Creating an Inventory Class //

class Inventory { // starting a class for inventory
    constructor() {
        this.products = []
    };

    addProduct(product) { // adding a method to be able to add new products to the class
        this.products.push(product);
    };

    listProducts() { // adding a method to list those products
        this.products.forEach(product => console.log(product.getDetails()));
    };
};

const inventory = new Inventory(); // creating an instance
inventory.addProduct(prod1);
inventory.listProducts();
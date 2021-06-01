class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
}

class Product {
  constructor(name) {
    this.name = name;
  }

  addToCart() {
    shoppingCart.addItem(this);
  }
}

let shoppingCart = new ShoppingCart();
let product = new Product("Socks");
product.addToCart();
console.log(shoppingCart.items);

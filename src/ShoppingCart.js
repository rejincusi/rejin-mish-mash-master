class ShoppingCart {
  constructor() {
    this.cart = []
  }
  getItems() {
    return this.cart
  }
  addItem(itemName, quantity, price) {
    const item =  {
      name: itemName,
      quantity,
      pricePerUnit: price
    }
    this.cart.push(item)
  }
  clear() {
    this.cart = []
  }
  total() {
    return this.cart
      .map(item => item.quantity * item.pricePerUnit)
      .reduce((accu, currentItem) => accu + currentItem, 0)
  }
}

module.exports = ShoppingCart
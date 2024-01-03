class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(amount) {
        this.inStock += amount
    }
    calculateDiscount(percentage) {
        const discount = (percentage / 100) * this.price;
        const discountedPrice = this.price - discount;
        return discountedPrice;
    }
}

const iphone = new Product('Iphone 15', 'Conteúdo da Embalagem:\n- iPhone 15 com iOS 17\n- Cabo para recarga com conector USB-C (1m)\n- Documentação', 8999);

console.log(iphone);

iphone.addToStock(20);

console.log(iphone);

console.log(iphone.calculateDiscount(50));
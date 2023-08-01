const products = [
    {id:1, name:"CERVEZA QUILMES", price: 125, stock:10},
    {id:2, name:"FERNET BRANCA", price: 100, stock:10},
    {id:3, name:"VINO COSECHA TARDIA", price: 67, stock:10},
    {id:4, name:"WISKEY ", price: 200, stock:10},
    {id:5, name:"RON BACARDI", price: 45, stock:10},
    {id:6, name:"CERVEZA ANDES", price: 90, stock:10},
    {id:7, name:"FERNET 1882", price: 67, stock:10}
]

const cart = []


class ProductCart{
    constructor(obj, qty){
        this.id = obj.id,
        this.name = obj.name,
        this.price = obj.price,
        this.stock = obj.stock,
        this.quantity = qty
    }
}

const addProductToCart = (id, quantity = 1) => {
    const product = products.find(p => p.id == id)
    if(!product){
        return "El producto no existe en el ecommerce"
    }
    if(product.stock < quantity){
        return "No hay suficiente stock del producto"
    }

    const productCart = cart.find(p => p.id == id)
    if(productCart){
        productCart.quantity += quantity
        productCart.stock -= quantity
    }
    else{
        product.stock -= quantity
        cart.push(new ProductCart(product, quantity))
    }

    return cart;

}


const delProductToCart = (id, quantity = 1) => {
    const productCart = cart.find(p => p.id == id)
    if(!productCart){
        return "El producto no existe en el carrito"
    }

    productCart.quantity -= quantity;
    productCart.stock += quantity;

    if(productCart.quantity < 1){
        const idx = cart.findIndex(p => p.id == id)
        cart.splice(idx, 1)
        console.log(`Producto ${productCart.name} fue eliminado del carrito`)
    }

    return cart;
}


//Calcular monto total del carrito


//Buscar un producto en el ecommerce


//Ordenar por precio mayor y por precio menor


console.table(addProductToCart(1, 4))
console.table(addProductToCart(1, 6))
console.table(addProductToCart(2, 6))
console.table(addProductToCart(3, 3))
console.table(delProductToCart(1, 10))
console.table(delProductToCart(2, 3))



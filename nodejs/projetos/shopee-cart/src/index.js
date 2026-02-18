import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

//adicionado dois itens ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, 1)

// mostrar itens do carrinho
await cartService.displaycart(myCart)

//deletado doi itens ao carrinho
//await cartService.deleteItem(myCart, item2.name)
//await cartService.deleteItem(myCart, item1.name)

await cartService.calculateTotal(myCart)
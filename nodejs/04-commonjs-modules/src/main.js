// importação de modulos
const {getFullName, productType} = require("./services/products")
const config = require("./services/config")
const database = require("./services/database")

async function main() {
    console.log('Carrinho de compras:')
    //product.getFullName("408", "mousepad")
    //product.getFullName("324", "mouse")

    getFullName("1", "teclado")

    console.log(config.devArea)
    database.conectToDatabase
}

main()
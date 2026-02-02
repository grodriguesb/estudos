const p= require("./services/products")

async function main() {
    console.log('Hello World')
    p.getFullName("408", "mousepad")
    p.getFullName("324", "mouse")
}

main()
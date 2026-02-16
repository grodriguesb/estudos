// Quais ações meu carrinho pode fazer


// CASOS DE USO
//-> Adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}

//-> Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1){
        userCart.splice(index, 1)
    }
}

//-> Remover um item - diminui um item
async function removeItem(userCart, index) {
    
}

//-> Calcular o total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}
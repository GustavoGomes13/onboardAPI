//Abre form para novo pedido
let add = document.querySelector('.submenu a')

let formAddOrder = document.querySelector('.new-order')

add.addEventListener('click', () => {
    formAddOrder.classList.remove('hide')
}) 

/*
// Maximizar e minimzar as comandas
let card = document.querySelector(".card")
//let card = document.getElementsByClassName('card')

let cardContent = document.querySelector(".card-content")

//let cardContent = document.getElementsByClassName('card-content')
/*
card.addEventListener('click', () => {
    cardContent.classList.toggle('hide')
    
})
*/

/*************/
let addProductButton = document.getElementsByClassName('add-button')
for (let i = 0; i < addProductButton.length; i++) {
    let button = addProductButton[i]
    button.addEventListener('click', addProduct)
}

function addProduct(event) {
    let button = event.target
    let product = button.parentElement.parentElement
    let productName = product.getElementsByClassName('productName')[0].innerText

    let price = button.parentElement.parentElement
    let productPrice = price.getElementsByClassName('productPrice')[0].innerText
    addProductToOrder(productName, productPrice)
}

function addProductToOrder(productName, productPrice) {
    /*
    for (var i = 0; i < name.length; i++) {
        if (name[i].innerText == productName) {
            console.log(name[i].innerText)
            alert('O item já foi adicionado')
        }
    }
    */

    /*
    let tableOrderProducts = document.getElementById('order-products')    
    let row = tableOrderProducts.insertRow(1)
    let productsInOrder = document.getElementsByClassName('productInOrder')[0]
    let nameOfProductsInOrder = productsInOrder.getElementsByClassName('productNameInOrder')
    for (let i = 0; i < nameOfProductsInOrder.length; i++) {
        if(nameOfProductsInOrder[i].innerText == productName) {
            alert('Esse item já foi adicionado')
            return
        }
    }
    */

    /*
    let orderRowContent = `
    <tr class="productInOrder">
        <td class="productNameInOrder">${productName}</td>
        <td class="productPriceInOrder">${productPrice}</td>
        <td class="productQtyInOrder"><input type="number"></td>
    </tr>`

    row.innerHTML = orderRowContent
    */
    
    let tableOrderProducts = document.getElementById('order-products')    
    let row = tableOrderProducts.insertRow(1)
    let name = row.insertCell(0)
    name.classList.add('nameOfProduct')
    let price = row.insertCell(1)
    let qty = row.insertCell(2)
    name.innerText = productName
    price.innerText = productPrice
    qty.innerHTML = `<input type="number" value="1">`
    
    //let orderProductRow = document.createElement('tr')
    //orderProductRow.innerText = productName
    //let orderProducts = document.getElementById('order-products')[0]
    //orderProducts.append(orderProductRow)
}

/*
botão para finalizar comanda
let close = document.querySelector("button")

close.addEventListener("click", () => {
    confirm("Essa fera aí meu")
})
*/
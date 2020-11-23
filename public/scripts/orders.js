let add= document.querySelector('.submenu a')

let formAddOrder = document.querySelector('.new-order')

add.addEventListener('click', () => {
    formAddOrder.classList.remove('hide')
}) 


let card = document.querySelector(".card")

let cardContent = document.querySelector(".card-content")

card.addEventListener("click", () => {
    cardContent.classList.toggle("hide")
})

// botão para finalizar comanda
let close = document.querySelector("button")

close.addEventListener("click", () => {
    confirm("Essa fera aí meu")
})
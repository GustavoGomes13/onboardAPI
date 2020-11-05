// recebe o botão
let add = document.querySelector('.submenu a')

// recebe o fieldset
let formAddClient = document.querySelector('.new-client')

add.addEventListener("click", () => {
    formAddClient.classList.remove('hide')
})

// Maximiza e minimiza tabela de clientes
let tableResults = document.querySelector('table')

let divClick = document.querySelector('.show-table')

divClick.addEventListener("click", () => {
    tableResults.classList.toggle('hide')
})
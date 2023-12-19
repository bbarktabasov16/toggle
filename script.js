// let body = document.body

// let div = document.createElement('div')
// div.innerHTML = 'Привет!'
// body.prepend(div)
// // div.classList.add('block')
// div.className = 'block'
// console.log(div.getAttribute('class'))

// const onAdd = () => {
//     blockId.classList.add('blockClass')
// }

// const onDelete = () => {
//     blockId.classList.remove('blockClass')
// }

let blockId = document.getElementById('block')
let yellowLight = document.querySelector('.yellow')

const onToggle = () => {
    blockId.classList.toggle('blockClass')
    yellowLight.classList.toggle('light')
}
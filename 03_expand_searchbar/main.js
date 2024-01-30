const button = document.querySelector('.btn')
const search = document.querySelector('.search')

button.addEventListener('click', (e) => {
    search.classList.toggle('active')
    console.log('click')
})
const myPanel = document.querySelectorAll('.panel')

myPanel.forEach((value) => {
    value.addEventListener('click', (e) => {
        removeActiveClasses()
        value.classList.add('active')
       
    })
})

function removeActiveClasses(){
    myPanel.forEach((value)=>{
        value.classList.remove('active')
    })
}
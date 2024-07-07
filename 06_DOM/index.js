function changeHeading(){
    const head = document.getElementById('title')
    head.innerHTML = "HELLO Sohaib"
    const list = document.querySelectorAll('li')
    list.forEach( (item) => {
        item.style.backgroundColor = "orange";
        item.innerHTML = 'listed'
    
    
} )
}
const btn = document.getElementById('btn')
btn.style.padding = '10px 20px'
btn.style.color = 'white'
btn.style.fontSize = '24px'
btn.style.backgroundColor = 'green'
btn.style.border = 'none'
btn.style.borderRadius = '40px'
btn.style.cursor = 'pointer'
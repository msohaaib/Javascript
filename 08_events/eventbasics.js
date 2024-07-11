// document.getElementById('owl').onclick = function(){
//     alert("owl click")
// }
// attachEvent()
// jQuery - on


// types (keyboard, mouse, browser)
// timestamp
// defaultPrevented
// target
// toElement
// srcElement
// currentTarget
// clientX, clinetY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

//addEventListner , propagation
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Clicked inside the ul");
// }, false)
// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("Owl Clicked");
//     e.stopPropagation()
// }, false)

// preventDefault
// document.getElementById('google').addEventListener('click', (e) =>{
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google clicked");
// })

document.querySelector('#images').addEventListener('click', (e) => {
    console.log(e.target.parentNode.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeit = e.target.parentNode
        removeit.remove()

    }
    // removeit.parentNode.removeChild(removeit)

})
import dogsData from './data.js'
import Dog from './Dog.js'


const dogsNestEl = document.getElementById('dogs-nest')
const crossBtn = document.getElementById('cross-btn')
const heartBtn = document.getElementById('heart-btn')

crossBtn.addEventListener('click',handleCrossBtn)
crossBtn.disabled = false
heartBtn.addEventListener('click', handleHeartBtn)
heartBtn.disabled = false

function handleCrossBtn() {
    heartBtn.disabled = true
    crossBtn.disabled = true
    dog.hasBeenSwiped = true
    render()
    if (dogsData.length > 0){
        setTimeout(()=> {
            heartBtn.disabled = false
            crossBtn.disabled = false
            dog = getNewDog()
            render()
        },1500)
    }
}

function handleHeartBtn() {
    heartBtn.disabled = true
    crossBtn.disabled = true
    dog.hasBeenSwiped = true
    dog.hasBeenLiked = true
    render()
    if (dogsData.length > 0){
        setTimeout(()=> {
            heartBtn.disabled = false
            crossBtn.disabled = false
            dog = getNewDog()
            render()
        },1500)
    }
}


function getNewDog() {
    const newDog = dogsData.shift()
    return newDog ? new Dog(newDog) : {}
}

function render() {
    dogsNestEl.innerHTML = dog.getDogsHtml()
}

let dog = getNewDog()
render()


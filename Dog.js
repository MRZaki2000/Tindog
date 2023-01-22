import{getLikedOrNotHtml} from '/utils.js'
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogsHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        document.getElementById("dogs-nest").style.backgroundImage = `url('${avatar}')`
        return `
        ${getLikedOrNotHtml(hasBeenSwiped, hasBeenLiked)}
        <div class="dogs-data">
            <h1>${name}, ${age}</h1>
            <h3>${bio}</h3>
        </div>`
    }
}

export default Dog


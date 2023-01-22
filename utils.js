function getLikedOrNotHtml(swiped, liked) {
    if (swiped === false){
        return ""
    }
    else if(swiped === true && liked === false){
        return `<img class="badge" src="badge-nope.png">`
    }
    else{
        return `<img class="badge" src="badge-like.png">`
    }
}

export {getLikedOrNotHtml}
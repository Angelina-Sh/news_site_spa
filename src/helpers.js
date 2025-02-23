import { makeLike } from "./backend.js"
import { activateMainPage } from "./index.js"
import outNews from "./news.js"
import {TAG_COLORS, TAG_NAMES} from "./options.js"

export function makeFriendlyNumber(num) {
    if (num >= 1000000) 
        return intlFormat(num / 1000000) + ' млн'
    if (num >= 1000) 
        return intlFormat(num / 1000) + ' тыс'
    return intlFormat(num)

    function intlFormat(num) {
        return new Intl.NumberFormat().format(Math.round(num * 10) / 10)
    }
}

export function addImage(node, src) {
    node.children[0].src = src
}

export function addTag(node, tag) {
    node.className = `tag ${TAG_COLORS[tag]}`
    node.innerHTML = TAG_NAMES[tag]
}

export function addStatistic(node, likesCount, commentsCount, isLiked, id) {
    const likes = makeFriendlyNumber(likesCount)
    if (isLiked) {  
        node.children[0].innerHTML = `<img src='./public/heart.svg' alt=''> ${likes}`
    } else {
        node.children[0].innerHTML = `<img src='./public/heart2.svg' alt=''> ${likes}`
    }
    node.children[0].onclick = () => {
        makeLike(id)
        activateMainPage()
    }
    const comments = makeFriendlyNumber(commentsCount)
    node.children[1].innerHTML = `<img src='./public/comments.svg' alt=''> ${comments}`
}

export function addNewsLinkClick(node, id) {
    node.onclick = event => {
        event.preventDefault()
        outNews(id)
    }
}

export function switchDisplay(node) {
    node.style.display = node.style.display === 'none' ? 'flex' : 'none'
}
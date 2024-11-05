import {addImage, addTag, addStatistic, addNewsLinkClick} from "./helpers.js"

export default {
    id: 'trends-container',
    configCardNode
}

function configCardNode(node, oneNews) {
    const {id, tag, title, commentsCount, likesCount, img, isLiked} = oneNews
    node.style.display = 'block'
    addNewsLinkClick(node.children[0], id)
    addImage(node.children[0], img)
    addTag(node.children[1], tag)
    addNewsLinkClick(node.children[2], id)
    addText(node.children[2], title)
    addStatistic(node.children[3], likesCount, commentsCount, isLiked, id)
}

function addText(node, title) {
    node.children[0].innerText = title
}
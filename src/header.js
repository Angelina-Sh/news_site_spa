import newsMainCardConfig from "./newsMainCardConfig.js"
import outCards from "./outCards.js"
import {news} from "./backend.js"
import { switchToAdd, switchToMain } from "./router.js"

const nav = document.getElementById('nav')
const searchButton = document.getElementById('search')
const searchInput = document.getElementById('search-input-container')
const addPageLink = document.getElementById('add-page-link')
const mainLogo = document.getElementById('main-logo')

mainLogo.onclick = () => switchToMain()

nav.onclick = event => {
    const target = event.target
    activateTagCss()
    const tag = event.target.id
    const tagNews = tag === 'news' ? news : news.filter(n => n.tag === tag)
    outCards(tagNews, newsMainCardConfig)

    function activateTagCss() {
        for (let div of nav.children)
            div.className = ''
        target.className = 'active-tag'
    }
}

searchButton.onclick = () => {
    searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none'
}

searchInput.addEventListener('keyup', event => {
    if (event.key !== 'Enter') return
    const searchText = event.target.value
    const resultNews = news.filter(n => ~n.title.indexOf(searchText))
    outCards(resultNews, newsMainCardConfig)
    switchToMain()
})

addPageLink.onclick = () => switchToAdd()
import { activateMainPage } from "./index.js"
import { addNews } from "./backend.js"
import { switchToMain } from "./router.js"

const form = document.getElementById('add-news-form')
const imageContainer = document.getElementById('image-container')
const file = document.getElementById('file')
const fullText = document.getElementById('full-text')
const cancel = document.getElementById('cancel-button')
const save = document.getElementById('save')

file.addEventListener('change', () => {
    imageContainer.style.background = `url(${URL.createObjectURL(file.files[0])}) no-repeat center/cover`
})

cancel.onclick = event => {
    event.preventDefault()
    form.reset()
    imageContainer.style.background = ''
    fullText.innerText = ''
}

save.onclick = event => {
    event.preventDefault()
    const newArticle = {
        tag: form.elements.tag.value,
        date: new Date(),
        title: form.elements.title.value,
        text: fullText.innerText,
        img: URL.createObjectURL(file.files[0])
    }
    addNews(newArticle)
    activateMainPage()
    switchToMain()
}
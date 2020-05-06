var $dom = document.querySelector('.root')

// function sayHello(content, color) {
//     const newDiv = document.createElement('div');
//     const newContent = document.createTextNode(content);
//     newDiv.classList.add('hello_world')
//     newDiv.style.color = color;
//     newDiv.style.fontFamily = 'Cedarville Cursive, cursive';
//     newDiv.appendChild(newContent)
//     $dom.appendChild(newDiv)
// }


// sayHello('Hello World !', 'burlywood')


class Model {
    constructor() {
        this.pages = [
            {
                title: 'Homepage',
                url: '/',
                background: 'red',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae neque molestias quos enim ratione repudiandae reprehenderit minima, voluptatem dolorem deserunt distinctio repellendus ea hic? Pariatur quis provident modi consequuntur iste?',
                hero: './assets/PixelatedTomato.png'
            },
            {
                title: 'Contact',
                url: '/contact',
                background: 'green',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae neque molestias quos enim ratione repudiandae reprehenderit minima, voluptatem dolorem deserunt distinctio repellendus ea hic? Pariatur quis provident modi consequuntur iste?',
                form: true
            }
        ]
    }

    getUrl(url) {
        return this.pages.find(page => page.url === url)
    }
}

class View {
    constructor(container) {
        this.container = document.querySelector(container)
    }
    changeTitle(word) {
        this.container.innerHTML = word
    }
    changeBackground(color) {
        this.container.style.background = color
    }
    createForm() {
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.placeholder = 'Entrez votre adresse email'
        this.container.appendChild(input)
    }
    addHero(hero) {
        const img = document.createElement('img')
        img.setAttribute('src', hero)
        this.container.appendChild(img)
    }

}

function Controller() {
    const data = new Model()
    const currentPage = data.getUrl('/')
    const page = new View('.root')
    const hero = new View('.hero')
    page.changeTitle(currentPage.title)
    page.changeBackground(currentPage.background)

    if (currentPage.form) {
        page.createForm()
    }
    if (currentPage.hero) {
        hero.addHero(currentPage.hero)
    }
}
Controller()
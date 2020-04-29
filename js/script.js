var $dom = document.querySelector('.root')

function sayHello() {
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode('Hello world !');
    newDiv.classList.add('hello_world')
    newDiv.appendChild(newContent)
    $dom.appendChild(newDiv)
}
sayHello()
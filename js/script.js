var $dom = document.querySelector('.root')

function sayHello(content, color) {
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode(content);
    newDiv.classList.add('hello_world')
    newDiv.style.color = color;
    newDiv.style.fontFamily = 'Cedarville Cursive, cursive';
    newDiv.appendChild(newContent)
    $dom.appendChild(newDiv)
}
sayHello('Hello World !', 'burlywood')
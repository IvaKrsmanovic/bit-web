// Create a function that selects the second list and applies a class that sets some
// background color to it.

function makeBackgroundColor(position, color) {
    document.querySelectorAll('ul')[position - 1].setAttribute('class', 'second')
    var change = document.getElementsByClassName('second');

    return change[0].style.backgroundColor = color;

}

makeBackgroundColor(2, 'red');

// Create a second function that, when triggered, selects all 'li' elements on the
// page.
// The function also sets a class that sets some bg color to every 'li' element.

function setBackground(type, color, className) {
    var list = document.querySelectorAll(type)
    for (var i = 0; i < list.length; i++) {
        list[i].setAttribute('class', className)
    }
    for (var i = 0; i < list.length; i++) {
        if (list.className = className) {
            list[i].style.backgroundColor = color;
        }
    }

    return;
}

setBackground('ul', 'blue', 'blueish')
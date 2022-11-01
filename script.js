let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let heading = document.getElementById("heading");

function genclr() {
    let hexCode = genhex();
    document.body.style.background = hexCode;
    heading.innerText = hexCode;
    console.log(document.body.style.background);
    document.body.style.color = lightOrDark(hexCode);
}
function genhex() {
    return `#${hex[Math.floor(Math.random() * hex.length)]}${hex[Math.floor(Math.random() * hex.length)]}${hex[Math.floor(Math.random() * hex.length)]}${hex[Math.floor(Math.random() * hex.length)]}${hex[Math.floor(Math.random() * hex.length)]}${hex[Math.floor(Math.random() * hex.length)]}`;
}

genclr();

window.addEventListener("keypress", (key) => {
    if (key.keyCode == 32) {
        genclr();
    }
});

document.body.addEventListener("click", () => {
        genclr();
});

function lightOrDark(color) {

    // Variables for red, green, blue values
    var r, g, b, hsp;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If RGB --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    }
    else {

        // If hex --> Convert it to RGB: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }

    // console.log(`${r} + ${g} + ${b}`);
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
        );
        // console.log(hsp);
        
    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {

        return 'black';
    }
    else {

        return 'white';
    }
}

import './css/resetStyle.css';
import './css/style.css';

const but = document.querySelector('.widget__but');
const text = document.querySelector('.widget__text');
var style = window.getComputedStyle(text, null);

console.log(style.animationName);

but.addEventListener('click', () => {
    /* text.style.display = 'none'; */
    /* if (style.display == 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    } */
   if (style.animationName == 's') {
        text.style.animationName = 'd';
    } else {
        text.style.animationName = 's';
    }





})



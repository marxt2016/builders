import "../index.css";
import JS_IMG from '../assets/490_js.jpg';

console.log('Hello');

const image = document.createElement('img');
image.className = 'js-image';
image.src = JS_IMG;
document.body.append(image);

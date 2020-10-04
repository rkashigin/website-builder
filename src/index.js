import {model} from "./model";
import './styles/main.css';

const $website = document.querySelector('#website');

model.forEach(block => {
    $website.insertAdjacentHTML('beforeend', block.toHTML());
});
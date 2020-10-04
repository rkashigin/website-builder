import {model} from "./model";
import {templates} from "./templates";
import './styles/main.css';

const $website = document.querySelector('#website');

model.forEach(block => {

    const toHTML = templates[block.type];

    $website.insertAdjacentHTML('beforeend', toHTML(block));
});
import {model} from "../model";

export class Website {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    render(model) {
        this.$el.innerHTML = '';
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML());
        });
    }
}
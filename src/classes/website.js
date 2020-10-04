import {model} from "../model";

export class Website {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    render(model) {
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML());
        });
    }
}
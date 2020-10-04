import {block} from "../utils";
import {TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector);

        this.init();
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template);
        this.$el.addEventListener('submit', this.addBlock);
    }

    get template() {
        return [
            block('text'),
            block('title'),
        ].join('');
    }

    addBlock(event) {
        event.preventDefault();

        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;

        let newBlock;

        if (type === 'text') {
            newBlock = new TextBlock(value, {styles});
        } else {
            newBlock = new TitleBlock(value, {styles});
        }

        console.log(newBlock);
    }
}
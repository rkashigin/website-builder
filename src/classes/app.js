import {Website} from "./website";
import {Sidebar} from "./sidebar";


export class App {
    constructor(model) {
        this.model = model;
    }

    init() {
        const website = new Website('#website');

        website.render(this.model);

        const updateCallback = newBlock => {
            this.model.push(newBlock);
            website.render(this.model);
        };

        new Sidebar('#panel', updateCallback);
    }
}
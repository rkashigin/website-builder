import {model} from "./model";
import {Website} from "./classes/website";
import './styles/main.css';


const website = new Website('#website');

website.render(model);
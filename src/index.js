import {model} from "./model";
import {Website} from "./classes/website";
import {Sidebar} from "./classes/sidebar";
import './styles/main.css';


const website = new Website('#website');

website.render(model);

const sidebar = new Sidebar('#panel');
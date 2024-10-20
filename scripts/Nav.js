import { displayElements } from "./utils.js";

class Nav {
	constructor() {
		this.navEl = document.createElement("header");
		const nav = document.createElement("nav");
		const ul = document.createElement("ul");
		const liHome = document.createElement("li");
		const liProjects = document.createElement("li");
		const liAbout = document.createElement("li");
	}
	injectTo(el) {
		el.append(this.navEl);
		displayElements(this.navEl);
	}
}

export { Nav };

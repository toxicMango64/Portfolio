class ProjectCard extends HTMLElement {
	constructor(title, description, tags, link) {
		super();
		this.classList.add("fade");
		this.createElements(title, description, tags, link);
	}

	createElements(title, description, tags, link) {
		this.titleEl = document.createElement("h1");
		this.titleEl.classList.add("project__title");
		this.titleEl.innerText = title;
		this.append(this.titleEl);

		this.tagWrapper = document.createElement("div");
		this.tagWrapper.classList.add("tagWrapper");
		tags.forEach((tag) => {
			let tagEl = document.createElement("p");
			tagEl.classList.add("tag");
			tagEl.innerText = tag;
			this.tagWrapper.append(tagEl);
		});
		this.append(this.tagWrapper);

		this.descEl = document.createElement("p");
		this.descEl.classList.add("project__desc");
		this.descEl.innerText = description
			? description
			: "Learn more about this project by checking the source code on GitHub";
		this.append(this.descEl);

		this.linkBtn = document.createElement("button");
		this.linkBtn.classList.add("btn");
		this.linkBtn.classList.add("btn--primary");
		this.linkBtn.classList.add("project__linkBtn");
		this.linkBtn.innerText = "Visit GitHub";
		this.linkBtn.onclick = () => {
			window.open(link);
		};
		this.append(this.linkBtn);
	}
}
customElements.define("project-card", ProjectCard);

export { ProjectCard };

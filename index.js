function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const OTHER_TITLES = [
	"a 42 student",
	"an elite norminetter",
	"a proud Pakistani",
	"a software developer",
	"an embedded systems enthusiast",
	"a game developer",
];
const otherTitlesEl = document.querySelector(".otherTitles");

// Display a new title every duration milliseconds
const TITLE_DURATION = 2000;
setInterval(() => {
	otherTitlesEl.style.transform = "translateY(25px) rotateZ(5deg)";
	setTimeout(() => {
		otherTitlesEl.innerText =
			OTHER_TITLES[getRandomInt(OTHER_TITLES.length)];
		otherTitlesEl.style.transform = "initial";
	}, 250);
}, TITLE_DURATION);

// Handle landing page button clicks
const projectsBtn = document.querySelector(".projectsBtn");
const aboutBtn = document.querySelector(".aboutBtn");

aboutBtn.onclick = () => {
	window.open("#about", "_self");
};
projectsBtn.onclick = () => {
	window.open("#projects", "_self");
};

// Get all the public repositories in the user account toxicMango64
const USER = "toxicMango64";
let response = await fetch(`https://api.github.com/users/${USER}/repos`);
let responseParsed = await response.json();

const projectsWrapper = document.querySelector(".projectsWrapper");

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
		this.linkBtn.classList.add("project__linkBtn");
		this.linkBtn.innerText = "Visit GitHub";
		this.linkBtn.onclick = () => {
			window.open(link);
		};
		this.append(this.linkBtn);
	}
}
customElements.define("project-card", ProjectCard);

// Loop through each repository that was found and create a project card for it and add it to the website
responseParsed.forEach((repo) => {
	let card = new ProjectCard(
		repo.name,
		repo.description,
		repo.topics,
		repo.clone_url
	);
	projectsWrapper.append(card);
});

function displayElements(targetEl) {
	const fadeEls = targetEl.querySelectorAll(".fade");
	const unhide = (i) => {
		if (i == fadeEls.length) return;
		fadeEls[i].style.opacity = "1";
		fadeEls[i].style.transform = "initial";
		setTimeout(() => {
			unhide((i += 1));
		}, 1000 / fadeEls.length);
	};
	unhide(0);
}

const observerOptions = {
	threshold: 0.5,
};
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			displayElements(entry.target);
		}
	});
}, observerOptions);

const landingPage = document.querySelector(".landing");
const projectsPage = document.querySelector(".projects");
const navBar = document.querySelector("nav");
const aboutPage = document.querySelector(".about .text");
const footer = document.querySelector("footer");
const observedPages = [landingPage, projectsPage, navBar, aboutPage, footer];

observedPages.forEach((page) => {
	observer.observe(page);
});

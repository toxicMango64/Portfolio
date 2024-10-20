// import { Nav } from "./nav.js";
import { displayElements, responseParsed as userRepostories } from "./utils.js";
import { ProjectCard } from "./ProjectCard.js";

// const nav = new Nav();
// nav.injectTo(document.body);

displayElements(document.querySelector("header"));

const projectsWrapper = document.querySelector(".projectsWrapper");
const projectsSection = document.querySelector(".projects");
userRepostories.forEach((repo) => {
	let card = new ProjectCard(
		repo.name,
		repo.description,
		repo.topics,
		repo.clone_url
	);
	projectsWrapper.append(card);
});

displayElements(projectsWrapper);
displayElements(projectsSection);

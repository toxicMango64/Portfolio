let response = await fetch("https://api.github.com/users/toxicMango64/repos");

let responseParsed = await response.json();

responseParsed.forEach((repo) => {
	// Create project card here and append to DOM
	console.log(repo.name);
});

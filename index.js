const API_KEY = "https://v2.jokeapi.dev/joke";
const request = new XMLHttpRequest();
const components = {
	previousButton: document.querySelector(".previous"),
	searchButton: document.querySelector(".search-btn"),
	nextButton: document.querySelector(".next"),
	categories: document.querySelector("select"),
	jokeCategoryField: document.querySelector(".joke-category"),
	jokeContentField: document.querySelector(".joke-content"),
	deliveryField: document.querySelector(".delivery"),
	jokeIndex: -1,
};
const allJokes = [];

function getJokes() {
	const value = components.categories.value;
	getRequest(`${API_KEY}/${value}`);	
}

function displayJoke(index) {
	return function() {
		const jokeObj = allJokes[index];
		components.jokeCategoryField.textContent = "Category: " + jokeObj["category"];
		components.jokeContentField.textContent  = jokeObj["setup"] ?? jokeObj["joke"];
		components.deliveryField.textContent = jokeObj["delivery"] ?? "...";
	}
}

function loadPrevious() {
	if (components.jokeIndex > 0) {
		components.jokeIndex--;
		displayJoke(components.jokeIndex)();
	}
}

function loadNext() {
	console.log(components.jokeIndex, allJokes.length-1)
	if (components.jokeIndex < allJokes.length-1) {
		components.jokeIndex++;
		displayJoke(components.jokeIndex)();
	}
}

function getRequest(url) {
	request.open("GET", url);
	request.responseType = "json";
	request.send();
}

function transferCompleted() {
	const response = request.response;
	allJokes.push(response);
	displayJoke(allJokes.length-1)();
	components.jokeIndex++;
}

function transferFailed() {
	alert("Faild to fetch data");
}

request.addEventListener("load", transferCompleted);
request.addEventListener('error', transferFailed);
components.searchButton.addEventListener('click', getJokes);
components.previousButton.addEventListener('click', loadPrevious);
components.nextButton.addEventListener('click', loadNext);
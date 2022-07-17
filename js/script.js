// Objects

function Anime(title, studio, episodeCount, hasWatched) {
    this.title = title;
    this.studio = studio;
    this.episodeCount = episodeCount;
    this.hasWatched = hasWatched;
}

// List of Anime Array

let anime_list = []

// Query Selectors

const addBtn = document.querySelector(".addAnimeBtn");
const overlay = document.getElementById("overlay");
const animeForm = document.getElementById("addAnimeForm");
const displayContainer = document.getElementById("displayAnime");
let title;
let studio;
let episodeCount;
let hasWatched;
const submitBtn = document.getElementById("submit");


// Button actions

addBtn.addEventListener("click", openAnimeForm);
overlay.addEventListener("click", closeAnimeForm);
submitBtn.addEventListener("click", createAnime);


// Functions

function addAnimeToList(anime) {
    anime_list.push(anime);
    console.log(anime_list);
    displayAnime();
}

function openAnimeForm() {
    animeForm.classList.add("active");
    overlay.classList.add("active");
}

function closeAnimeForm() {
    animeForm.classList.remove("active");
    overlay.classList.remove("active");
}

function clearInput() {

}

function createAnime() {
    title = document.getElementById("title").value;
    studio = document.getElementById("studio").value;
    episodeCount = document.getElementById("episodeCount").value;
    hasWatched = document.getElementById("hasWatched").value;
    const anime = new Anime(title, studio, episodeCount, hasWatched);
    addAnimeToList(anime);
    animeForm.classList.remove("active");
    overlay.classList.remove("active");
    clearInput();
}

function displayAnime() {
    clearAnime();
    for (let i = 0; i < anime_list.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        displayContainer.appendChild(newDiv);
    }
};

function destroyList() {
    while (displayContainer.firstChild) {
        displayContainer.removeChild(displayContainer.firstChild);
    };
    };

// Run 

displayAnime();
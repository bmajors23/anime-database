// Objects

function Anime(title, studio, episodeCount, hasWatched) {
    this.title = title;
    this.studio = studio;
    this.episodeCount = episodeCount;
    this.hasWatched = hasWatched;
}

// Query Selectors

const addBtn = document.querySelector(".login");


// Button actions

addBtn.addEventListener("click", animeInput);

// Functions

function animeInput() {
    console.log("hello");
}
// Objects

function Anime(title, studio, episodeCount, hasWatched) {
    this.title = title;
    this.studio = studio;
    this.episodeCount = episodeCount;
    this.hasWatched = hasWatched;
}

// Query Selectors

const addBtn = document.querySelector(".addAnimeBtn");
const overlay = document.getElementById("overlay");
const animeForm = document.getElementById("addAnimeForm")


// Button actions

addBtn.addEventListener("click", openAnimeForm);
overlay.addEventListener("click", closeAnimeForm);

// Functions

function openAnimeForm() {
    animeForm.classList.add("active");
    overlay.classList.add("active");
}

function closeAnimeForm() {
    animeForm.classList.remove("active");
    overlay.classList.remove("active");
}
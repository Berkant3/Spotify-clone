import API from "./scripts/api.js";
import UI from "./scripts/ui.js";
const api = new API();
const ui = new UI();

document.addEventListener("DOMContentLoaded", async () => {
  ui.renderLoader();
  await api.getPopular();

  ui.renderCards(api.songs);
});

ui.form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = event.target[0].value;

  if (!query.trim()) return alert("Lütfen aratılacak kelimeyi giriniz...");

  ui.renderLoader();

  ui.changeTitle(query + " İçin sonuçlar");

  await api.searchMusic(query);

  ui.renderCards(api.songs);
});

ui.list.addEventListener("click", (e) => {
  if (e.target.id === "play-btn") {
    const song = e.target.closest(".card").dataset;

    ui.rendePlayingInfo(song);
  }
});

const mode = localStorage.getItem("mode")
document.body.className = mode === "true" ? "dark" : "light";

ui.checkbox.checked = mode === "true"
// checkbox

ui.checkbox.addEventListener("change", (e) => {
  const isDarkMode = e.target.checked;

  localStorage.setItem("mode", isDarkMode)

  document.body.className = isDarkMode ? "dark" : "light";
});

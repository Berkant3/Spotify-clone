export default class UI {
  constructor() {
    this.list = document.querySelector("#list");
    this.form = document.querySelector("#search-form");
    this.title = document.querySelector("#title");
    this.playAreas = document.querySelector(".play-area")
    this.checkbox = document.querySelector('#mode-checkbox')
  }

  renderLoader() {
    this.list.innerHTML = ` <div class="container">
    <div class="loader"></div>
    </div>
    `;
  }

  renderCards(songs) {
    this.list.innerHTML = "";

    songs.forEach((song) => {
      const div = document.createElement("div");

      div.classList.add("card");

      div.innerHTML = `
      
      <figure>
        <img
          src="${song.images.coverarthq}"
        />
        <div id="play">
          <i id="play-btn" class="bi bi-play-fill"></i>
        </div>
      </figure>

      <h4>${song.title}</h4>
      <p>${song.subtitle}</p>
    
      
      `;

      div.dataset.title = song.title;
      div.dataset.photo = song.images.coverarthq;
      div.dataset.url = song.hub?.actions[1].uri;


      this.list.appendChild(div);
    });
  }
  changeTitle(text) {
    this.title.innerText = text;
  }

  rendePlayingInfo(song){
    this.playAreas.innerHTML = `
    <div>
        <img class="animate" src="${song.photo}" alt="">

        <div>
          <p>Şuan Oynatılıyor...</p>
          <h3>${song.title}</h3>
        </div>
      </div>
      <audio controls autoplay src="${song.url}"></audio>
    `
  }
}

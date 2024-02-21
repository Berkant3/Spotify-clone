const options = {
  headers: {
    "X-RapidAPI-Key": "af9dc56d46mshf5f9869e8813417p1ba4f4jsndae18ad8fbf5",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

export default class API {
  constructor() {
    this.songs = [];
  }
  async getPopular() {
    const res = await fetch(
      "https://shazam.p.rapidapi.com/charts/track?listId=ip-country-chart-TR&locale=tr",
      options
    );

    const data = await res.json();

    this.songs = data.tracks;
  }

  async searchMusic(query) {
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`,
      options
    );
    const data = await res.json();

    const formatted = data.tracks.hits.map((song) => {
      return song.track;
    });

    this.songs = formatted
  }
}

export default class SwapiService {
  _apiBase = "https://swapi.co/api";

  async getRecource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getRecource(`/people`);
    return res.results;
  }

  getPerson(id) {
    return this.getRecource(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getRecource(`/planets`);
    return res.results;
  }

  getPlanet(id) {
    return this.getRecource(`/planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getRecource(`/starships`);
    return res.results;
  }

  getStarship(id) {
    return this.getRecource(`/starships/${id}`);
  }
}

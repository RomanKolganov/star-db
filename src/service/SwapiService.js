export default class SwapiService {
  _apiBase = "https://swapi.co/api";

  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = planet => {
    const id = this._extractId(planet);
    return {
      id: id,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      name: planet.name
    };
  };

  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  };

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };

  getRecource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }

    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getRecource(`/people`);
    return res.results.map(this._transformPerson);
  };

  getPerson = async id => {
    const res = await this.getRecource(`/people/${id}`);
    return this._transformPerson(res);
  };

  getAllPlanets = async () => {
    const res = await this.getRecource(`/planets`);
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getRecource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getRecource(`/starships`);
    return res.results.map(this._transformStarship);
  };

  getStarship = async id => {
    const res = await this.getRecource(`/starships/${id}`);
    return this._transformStarship(res);
  };
}

export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Coild not fetch ${url}` +
                `, recived ${res.status}`)
        }

        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map((person) => this._transformPerson(person));
    };

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map((planet) => this._transformPlanet(planet));
    };

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map((starship) => this._transformStarship(starship));
    };

    async getStarship(id) {
        const starship= await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    async getFilm(id) {
        const film = await this.getResource(`/films/${id}/`);
        return this._transformFilm(film);
    };

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformFilm(film) {
        return {
            id: this._extractId(film),
            name: film.title,
            director: film.director,
            producer: film.producer,
            releaseDate: film.release_date,
        };
    };

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            homeworld: person.homeworld,
            height: person.height,
            mass: person.mass,
            eyeColor: person.eye_color,
            skinColor: person.skin_color,
        };
    };

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            length: starship.length,
            maxSpeed: starship.max_atmosphering_speed,
            cost: starship.cost_in_credits,
        };
    };

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            climate: planet.climate,
            diameter: planet.diameter,
            population: planet.population,
            terrain: planet.terrain,
        }
    }
};
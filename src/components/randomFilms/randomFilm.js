import React from 'react';

import SwapiService from '../../service/swapiService';
import Loader from '../loader/loader';
import ErrorMessage from '../errorMessage/errorMessage';

import './randomFilm.css';
import { async } from 'q';

export default class RandomFilm extends React.Component {

    swapiService = new SwapiService();

    state = {
        film: {},
        loading: true,
        error: false,
    };

    componentDidMount() {
        this.updateFilm();
    }

    updateFilm = async () => {
        try {
            const id = Math.floor(Math.random()*6) + 1;
            const film = await this.swapiService.getFilm(id);
            this.setState({ film, loading: false });
        } catch(e) {
            this.setState({ error: true, loading: false })
        };
    };



    render() {

        const { film, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const loader = loading ? <Loader /> : null;
        const content = !loading && !error ? <FilmView film={film} /> : null;

        return (
            <div className="random d-flex jumbotron rounded">
                {loader}
                {content}
                {errorMessage}
            </div>
        );
    };
};


const FilmView = ({ film }) => {

    const { id, name, director, producer, releaseDate } = film;
    return (
        <React.Fragment>
            <img className="card-img-right" alt="Poster Films" src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} />
            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Director</span>
                        <span>{ director }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Producer</span>
                        <span>{ producer }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Release date</span>
                        <span>{ releaseDate }</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
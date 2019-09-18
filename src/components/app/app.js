import React from 'react';

import Header from '../header/header';
import RandomFilm from '../randomFilms/randomFilm';
import SwapiService from '../../service/swapiService';
import ErrorBoundry from '../errorBoundry/errorBoundry';

import { PeoplePage, PlanetPage, StarshipPage } from '../pages/'

import './app.css';

export default class App extends React.Component {

    state = {
        
    }

    swapiService = new SwapiService();

    render() {

        return (
            <ErrorBoundry>
                <div className="star-app d-flex">
                    <Header />
                    <RandomFilm />
                    <PeoplePage />
                    <PlanetPage />
                    <StarshipPage />
                </div>
            </ErrorBoundry>
        );
    };
};
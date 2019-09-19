import React from 'react';

import Header from '../header/header';
import RandomFilm from '../randomFilms/randomFilm';
import SwapiService from '../../service/swapiService';
import ErrorBoundry from '../errorBoundry/errorBoundry';

import { PeoplePage, PlanetPage, StarshipPage, SpeciesPage } from '../pages/'

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {

    state = {
        
    }

    swapiService = new SwapiService();

    render() {

        return (
            <ErrorBoundry>
                <Router>
                    <div className="star-app d-flex">
                        <Header />
                        <RandomFilm />

                        <Route path="/" 
                               render={() => <h2>Welcome to Star Wars</h2>} 
                               exact/>
                        <Route path="/people/:id?" component={PeoplePage} />
                        <Route path='/planets/:id?' component={PlanetPage} />
                        <Route path='/starships/:id?' component={StarshipPage} />
                        <Route path='/species/:id?' component={SpeciesPage} />

                    </div>
                </Router>
            </ErrorBoundry>
        );
    };
};
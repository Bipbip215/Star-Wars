import React from 'react';
import _ from 'lodash';
import update from 'immutability-helper';

import Header from '../header/header';
import ItemList from '../itemList/itemList';
import PersonDetails from '../personDetails/personDetails';
import PlanetsDetails from '../planetsDetails/planetsDetails';
import RandomFilm from '../randomFilms/randomFilm';
import StarshipDetails from '../starshipDetails/starshipDetails';

import './app.css';

export default class App extends React.Component {

    state = {
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState( {
            selectedPerson: id,
        })
    };

    render() {
        return (
            <div className="star-app d-flex">
                <Header />
                <RandomFilm />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    };
};
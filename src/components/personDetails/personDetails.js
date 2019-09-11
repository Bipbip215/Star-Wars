import React from 'react';

import SwapiService from '../../service/swapiService';
import Loader from '../loader/loader';
import ErrorMessage from '../errorMessage/errorMessage';

import './personDetails.css';

export default class PersonDetails extends React.Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false,
        error: false,
        noPerson: true, 
    };

    componentDidMount() {
        this.updatePerson();
    };

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    async updatePerson() {
        try {
            const { personId } = this.props;
            if(!personId) {
                return;
            };
            await this.setState({ loading: true, person: false, noPerson: false })
            const person = await this.swapiService.getPerson(personId);
            this.setState({ person, loading: false, noPerson: false });
        } catch(e) {
            this.setState({ error: true, loading: false, noPerson: false });
        }
    };

    render() {

        const { person, loading, error, noPerson} = this.state;

        const noContent = noPerson ? <NoPersonView /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const loader = loading && !noPerson ? <Loader /> : null;
        const content = !loading && !error && !noPerson && person ? <PersonView person={person} /> : null;
        
        return (
            <div className="person jumbotron rounded card">
                {loader}
                {content}
                {errorMessage}
                {noContent}
            </div>
        );
    };
};

const PersonView = ({ person }) => {
    const {
        id, name, gender, birthYear, homeworld, 
        height, mass, eyeColor, skinColor
    } = person;

    return (
        <React.Fragment>
            <img className="card-img-right" alt="Poster Films" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">birth year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">                            <span className="term">height</span>
                        <span>{height}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">mass</span>
                        <span>{mass}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">eye color</span>
                        <span>{eyeColor}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">skin color</span>
                        <span>{skinColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

const NoPersonView = () => {
    return (
        <div className="person jumbotron rounded card">
            <span>Select a person from a list</span>
        </div>
    );
};
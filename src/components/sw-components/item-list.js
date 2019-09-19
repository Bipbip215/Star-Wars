import React from 'react';
import ItemList from '../itemList/itemList';
import withData from '../hoc-helpers/with-data';
import SwapiService from '../../service/swapiService';

const swapiService = new SwapiService();

const { 
    getAllPeople,
    getAllPlanets,
    getAllStarships,
    getAllSpecies,
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const renderName = ({ name }) => <span>{name}</span>;


const PersonList = withData(
                        withChildFunction(ItemList, renderName), 
                        getAllPeople);

const PlanetList = withData(
                        withChildFunction(ItemList, renderName), 
                        getAllPlanets);

const StarshipList = withData(
                        withChildFunction(ItemList, renderName),
                        getAllStarships);

const SpiciesList = withData(
    withChildFunction(ItemList, renderName),
    getAllSpecies);

export {
    PersonList,
    PlanetList,
    StarshipList,
    SpiciesList
}
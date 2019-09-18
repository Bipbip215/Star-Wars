import React from 'react';

import ItemDetails, { Record } from '../itemDetails/itemDetails';
import SwapiService from '../../service/swapiService';


const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getStarshipImage,
    getPlanetImage
} = swapiService;


const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId={itemId}
            getData={ getPerson }
            getImageUrl={ getPersonImage }>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
            <Record field="height" label="Height" />
            <Record field="mass" label="Mass" />
            <Record field="skinColor" label="Skin Color" />
        
        </ItemDetails>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId={itemId}
            getData={ getPlanet }
            getImageUrl={ getPlanetImage }>

            <Record field="climate" label="Climate" />
            <Record field="diameter" label="Diameter" />
            <Record field="population" label="Population" />
            <Record field="terrain" label="Terrain" />
            
        </ItemDetails>
    )
};

const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId={itemId}
            getData={ getStarship }
            getImageUrl={ getStarshipImage }>

            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="length" label="Length" />
            <Record field="maxSpeed" label="Max Speed" />
            <Record field="cost" label="Cost" />
            
        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
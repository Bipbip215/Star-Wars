import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row/row';
import {  StarshipDetails, StarshipList } from '../sw-components/index';

const StarshipPage = ({ history, match }) => {

    const { id } = match.params;

    return (
        <Row
            left={<StarshipList onItemSelected={(id) => history.push(id)} />}
            right={<StarshipDetails itemId={ id } />} />
    );
};

export default withRouter(StarshipPage);
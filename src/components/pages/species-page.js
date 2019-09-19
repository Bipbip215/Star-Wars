import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row/row';
import {  SpeciesDetails, SpiciesList } from '../sw-components/index';

const SpeciesPage = ({ history, match }) => {

    const { id } = match.params;

    return (
        <Row
            left={<SpiciesList onItemSelected={(id) => history.push(id)} />}
            right={<SpeciesDetails itemId={ id } />} />
    );
};

export default withRouter(SpeciesPage);
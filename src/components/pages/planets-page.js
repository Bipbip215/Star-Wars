import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row/row';
import { PlanetDetails, PlanetList } from '../sw-components/index';

const PlanetPage = ({ history, match }) => {
    
    const { id } = match.params

    return (
        <Row
            left={<PlanetList onItemSelected={(id) => history.push(id)} />}
            right={<PlanetDetails itemId={ id } />} />
    );
};

export default withRouter(PlanetPage);
import React from 'react';

import './header.css';

const Header = () => {

    return (
        <div className="header d-flex">
            <h2>Star Wars</h2>
            <div className="header-panel d-flex">
                <button type="button" className="btn btn-warning">People</button>
                <button type="button" className="btn btn-warning">Planets</button>
                <button type="button" className="btn btn-warning">Starships</button>
            </div>
        </div>
    )
};

export default Header;
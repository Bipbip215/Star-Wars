import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {

    return (
        <div className="header d-flex">
            <h2><Link to="/">Star Wars</Link></h2>
            <div className="header-panel d-flex">
                <Link className="btn" to="/people/">People</Link>
                <Link className="btn" to="/planets/">Planets</Link>
                <Link className="btn" to="/starships/">Starships</Link>
                <Link className="btn" to="/species/">Species</Link>
            </div>
        </div>
    )
};

export default Header;
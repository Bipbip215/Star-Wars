import React from 'react';

import './itemList.css';
import SwapiService from '../../service/swapiService';
import Loader from '../loader/loader';

export default class ItemList extends React.Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null,
    };

    async componentDidMount() {
        try {
            const people = await this.swapiService.getAllPeople();
            this.setState({ peopleList: people });
        } catch(e) {
            console.log(e);
        };
    };

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    };

    render() {

        const { peopleList } = this.state;

        if (!peopleList) {
            return <Loader />;
        };

        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                { items }
            </ul>
        );
    };
};
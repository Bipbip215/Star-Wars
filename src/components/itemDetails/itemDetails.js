import React from 'react';

import Loader from '../loader/loader';
import ErrorMessage from '../errorMessage/errorMessage';

import './itemDetails.css';

const Record = ({ field, label, item }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field]}</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends React.Component {

    state = {
        item: null,
        loading: false,
        error: false,
        noItem: true,
        image: null, 
    };

    componentDidMount() {
        this.updateItem();
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    async updateItem() {
        try {
            const { itemId, getData, getImageUrl } = this.props;
            if(!itemId) {
                return;
            };
            await this.setState({ loading: true, item: false, noItem: false })
            const item = await getData(itemId);
            this.setState({ 
                item, 
                loading: false, 
                noItem: false, 
                image: getImageUrl(item) 
            });
        } catch(e) {
            this.setState({ error: true, loading: false, noItem: false });
        }
    };

    render() {

        const { item, loading, error, noItem, image} = this.state;
        const record = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
        });

        const noContent = noItem ? <NoItemView /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const loader = loading && !noItem ? <Loader /> : null;
        const content = 
            !loading && !error && !noItem && item ? <ItemView 
                                                        item={item} 
                                                        image={image} 
                                                        record={record} /> 
            : null;
        
        return (
            <div className="item jumbotron rounded card">
                {loader}
                {content}
                {errorMessage}
                {noContent}
            </div>
        );
    };
};

const ItemView = ({ item, image, record }) => {
    const { name } = item;

    return (
        <React.Fragment>
            <img className="card-img-right" alt="Item" src={image} />
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    { record }
                </ul>
            </div>
        </React.Fragment>
    );
};

const NoItemView = () => {
    return (
        <div className="item jumbotron rounded card">
            <span>Select a item from a list</span>
        </div>
    );
};
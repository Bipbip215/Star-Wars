import React from 'react';

import Loader from '../loader/loader';
import ErrorBoundry from '../errorBoundry/errorBoundry';

const withData = (View, getData) => {
    return class extends React.Component {

        state = {
            data: null,
        };
    
        async componentDidMount() {
            try {
                const people = await getData();
                this.setState({ data: people });
            } catch(e) {
                console.log(e);
            };
        };

        render() {

            const { data } = this.state;

            if (!data) {
                return <Loader />;
            };

            return (
                <ErrorBoundry>
                    <View {...this.props} data={data} />
                </ErrorBoundry>
            )
        }
    }
};

export default withData
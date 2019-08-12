import React from 'react';

import User from '../../components/User';

const authIndexPage = props => {
    return (
        <div>
            <h1>The Auth Index Page</h1>
            <User name="Sean" age={25} />
        </div>
    );
};

export default authIndexPage;
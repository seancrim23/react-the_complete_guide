import React from 'react';
import Link from 'next/link';

const errorPage = props => {
    return (
        <div>
            <h1>Oops, so0mething went wrong!</h1>
            <p>try<Link href="/"><a>going back</a></Link></p>
        </div>
    );
};

export default errorPage;
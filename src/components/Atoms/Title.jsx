import React, { Fragment } from 'react';
import './Title.scss'


const Title = ({children}) => {
    return (
        <Fragment>
            <h1 className="title">{children}</h1>
        </Fragment>
    );
};

export default Title;
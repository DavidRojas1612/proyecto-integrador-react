import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import Title from '../Atoms/Title'
import PropTypes from 'prop-types';


const HeaderBar = ({authed, user, title}) => {

    return (
        <Fragment>
            { authed ? ( 
                <Fragment>
                    <li className="tool">
                        <Title>{user.displayName}</Title>
                    </li>
                    {
                        title ? (
                            <Fragment>

                                <li className="tool">
                                    <Title>{title}</Title>
                                </li>
                            </Fragment>
                        ):null 
                    }
                </Fragment>
            ) :
            (   <li className="tool">
                    <Title>learning to programing</Title>
                </li> 
            ) }
        </Fragment>
    );
};

HeaderBar.propTypes = {
    authed: PropTypes.bool.isRequired,
};


const mapStateToProps = ({authed, user, title}) => ({authed, user, title})

export default connect(mapStateToProps, null )(HeaderBar);
import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Button from '../Atoms/Button'
import { logIn,logOut } from '../../actions'
const LoginButton = ({authed, logIn, logOut}) => {

    return (
        <Fragment>
            { authed ? 
                <Button onClick={()=>logOut()} >Cerrar Sesión</Button> :
                <Button onClick={()=>logIn()} > Iniciar Sesión</Button>
            }
        </Fragment>
    );
};

LoginButton.propTypes = {
    authed: PropTypes.bool.isRequired,
};
const mapDispatchToProps = dispatch => ({
    logIn: () => dispatch(logIn()),
    logOut: () => dispatch(logOut())
})

const mapStateToProps = ({authed}) => ({authed})

export default connect(mapStateToProps, mapDispatchToProps )(LoginButton);
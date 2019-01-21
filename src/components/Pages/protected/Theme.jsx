import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Theme = ({theme}) => {
    const muestra = () =>{
        if(theme) console.log(theme)
        else return "viva uribe hpta"
    }
    return (
        <div>
            <h1>Hola desde aquí</h1>
            {
                muestra()
            }
        </div>
    );
};

Theme.propTypes = {
    
};

const mapDispatchToProps = dispatch => ({
    // getQuestions: () => dispatch(getQuestions()),
})
const mapStateToProps = (state, props) => ({
    theme: state.questions[props.id]
})

export default connect(mapStateToProps, null )(Theme);
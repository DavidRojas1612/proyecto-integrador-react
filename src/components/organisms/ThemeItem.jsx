import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import './ThemeItem.scss'

const ThemeItem = ({title, classTheme, path, id}) => {
    return (
        <div className={`card-theme ${classTheme}`}>
            <NavLink className="card-theme__nav" to={`${path}/${id}`}>{title}</NavLink>
        </div>
    );
};

ThemeItem.propTypes = {
    title: PropTypes.string.isRequired,
    classTheme: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default ThemeItem;
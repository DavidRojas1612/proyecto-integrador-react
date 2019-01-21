import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ThemeItem from './ThemeItem';
import './ThemeList.scss'


const ThemeList = ({questions}) => {

    const renderThemeList  = (questions) =>{
        return questions.map( ({theme}, i) => (
            <ThemeItem key={i} title={theme} classTheme={`theme-${i}`} path='dashboard' id={i}/>
        ))
    }
    return (
        <div className='ThemeList'>
            {
              questions && (
                <Fragment>
                    {
                        renderThemeList(questions)
                    }
                </Fragment >   
              )  
            }
        </div>
    );
};

ThemeList.propTypes = {
    questions: PropTypes.array.isRequired,
};

export default ThemeList;
import React from 'react';
import './Toolbar.scss'
import LoginButton from './LoginButton';
import HeaderBar from './HeaderBar';

const Toolbar = props => {
    return (
        <div className='toolbar__content'>
            <nav className='toolbar'>
                <HeaderBar />
                <li className='tool'>
                    <LoginButton />
                </li>
            </nav>
        </div>
    );
};


export default Toolbar;
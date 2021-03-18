
import React from 'react';
import PropTypes from 'prop-types';
import image from './assets/images/undraw_teacher_35j2.svg';

const App = ({ title })=>{
    return (
        <div>{title}<img src={image}/></div>
    )
}
App.propTypes = {
    title: PropTypes.string.isRequired
}
export default App;
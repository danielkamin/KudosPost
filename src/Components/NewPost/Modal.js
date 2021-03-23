import React from 'react';
import PropTypes from 'prop-types';
const StyledModal = ({children})=>{
    return <div>
        {children}
    </div>
}
export default StyledModal;
StyledModal.propTypes={
    children:PropTypes.element
}
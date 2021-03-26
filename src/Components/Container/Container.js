import React from 'react'

import PropTypes from 'prop-types';
import styled from 'styled-components';


//custom container component with three width options: small, medium and large
const StyledContainer = styled.div`
width: ${({size})=>
    (size === 'sm' && `568px` )||
    (size === 'md' && `1080px` )||
    (size === 'lg' && `1440px` ) };`


const Container = ({size,children}) =>{
    return <StyledContainer size={size}>
        {children}
    </StyledContainer>
}

Container.propTypes={
    children: PropTypes.node,
    size:PropTypes.oneOf(['sm','md','lg']).isRequired
}

export default Container
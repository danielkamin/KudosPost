import React from 'react'
import PropTypes from 'prop-types'

import styled,{css} from 'styled-components';

const StyledAvatar = styled.div`
${({large})=>
    large? css`
    width:42px;
    height:42px;
    & img{
        width:42px;
        height:42px;
        object-fit: cover;
        border-radius:50%;
    }
    `:css`
    width:32px;
    height:32px;
    & img{
        width:32px;
        height:32px;
        object-fit: cover;
        border-radius:50%;
    }
    `}
    `
/*Component designed to display profile pictures in circles */
const Avatar = ({imageSrc,large})=>{
    return <StyledAvatar large={large}>
            <img src={imageSrc}/>
            </StyledAvatar>
}

Avatar.propTypes = {
    imageSrc: PropTypes.string,
    large:PropTypes.bool
}

export default Avatar
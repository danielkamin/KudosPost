import React from 'react'
import PropTypes from 'prop-types'

import styled,{css} from 'styled-components';

import agreementLight from '../../assets/images/agreementLight.svg'
import agreement from '../../assets/images/agreement.svg'

const StyledIcon = styled.div`
    width:fit-content;
    & img{
        display:block; 
        ${({background})=>
        background && css`
        background-color:${props=>props.theme.colors.border.primary};
        border-radius:${props=>props.theme.borderRadius};
        padding:3px;
        margin: 0 -3px;
        `}
    }
   
`
//Reusable component for often used kudos icon
const KudosIcon = ({light,background})=>{
    return <StyledIcon background={background}>
        <img src={light? agreementLight:agreement}/>
    </StyledIcon>
}

KudosIcon.propTypes = {
    background:PropTypes.bool,
    light:PropTypes.bool
}

export default KudosIcon
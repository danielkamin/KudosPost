import React from 'react'
import PropTypes from 'prop-types'

//styles import
import styled from 'styled-components';

//img imports
import agreement from '../../assets/images/agreement.svg'

const StyledDiv = styled.div`
background-color:${props=>props.theme.colors.background.secondary};
border-color:${props=>props.theme.colors.border.primary};
display:flex;
& img{

}
& > div{
    grow:2;
}
`


const NewPostButton = ({onClick}) =>{
    return <StyledDiv onClick={onClick}>
        <img />
    <div><p>Kliknij, aby dodać post</p> </div>
    <img src={agreement}/>
    </StyledDiv>

}

NewPostButton.propTypes = {
    onClick:PropTypes.func
}

export default NewPostButton
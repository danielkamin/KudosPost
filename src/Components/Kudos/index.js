/* eslint-disable react/prop-types */
import React from 'react' 
import PropTypes from 'prop-types'

//styles import
import styled,{css} from 'styled-components';

const StyledKudos = styled.div`
display:flex;
text-align:center;
align-content:center;
width:100%;
border:1px solid ${props=>props.theme.colors.border.secondary};
border-radius:${props=>props.theme.borderRadius};
background:${props=>props.theme.colors.background.secondary};
font-size:${props=>props.theme.fontSize.md};
${({large})=>
large? css`
    height: 100px;
    
`:css`
    height: 200px;
`}
`

const Kudos = ({large,name,imageUrl,text})=>{

    return(<StyledKudos large={large}>
        <img src={imageUrl.default}/>
        <div>
            <p>{text}</p>
            <p>{name? name:"Imie nazwisko"}</p>
        </div>
    </StyledKudos>)
}

Kudos.propTypes = {
    imageUrl:PropTypes.object || PropTypes.string ,
    name:PropTypes.string,
    text:PropTypes.string,
    large:PropTypes.bool
}
export default Kudos
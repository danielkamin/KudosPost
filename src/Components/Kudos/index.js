/* eslint-disable react/prop-types */
import React from 'react' 
import PropTypes from 'prop-types'

//styles import
import styled,{css} from 'styled-components';

const StyledKudos = styled.div`
padding:10px 10px;
display:flex;
text-align:center;
align-items: center;
width:100%;
cursor:pointer;
border-radius:${props=>props.theme.borderRadius};
font-size:${props=>props.theme.fontSize.md};
margin-bottom:20px;
& img{
    width:20%;
    height: 50px;
    max-width:75px;
}
${({selected})=>
selected? css`
    background:${props=>props.theme.colors.border.primary};
    border:1px solid ${props=>props.theme.colors.details.primary}
`:css`
background:${props=>props.theme.colors.background.secondary};
    border:1px solid ${props=>props.theme.colors.border.primary};
`}
`
const StyledKudosContent = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 70%;
    flex-direction: column;
    & :nth-child(2){
        font-weight:bold;
    }
`

const Kudos = ({selected,name,imageUrl,text,onClick,id})=>{
    
    return(<StyledKudos selected={selected} onClick={()=>onClick(id)} key={id}>
        <img src={imageUrl.default}/>
        <StyledKudosContent>
            <p>{text}</p>
            <p>{name? name:"Imie nazwisko"}</p>
        </StyledKudosContent>
    </StyledKudos>)
}

Kudos.propTypes = {
    id:PropTypes.number.isRequired,
    imageUrl:PropTypes.object || PropTypes.string ,
    name:PropTypes.string,
    text:PropTypes.string,
    selected:PropTypes.bool,
    onClick: PropTypes.func
}
export default Kudos
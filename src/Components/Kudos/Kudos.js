/* eslint-disable react/prop-types */
import React from 'react' 
import PropTypes from 'prop-types'

//styles import
import styled,{css} from 'styled-components';

const StyledKudos = styled.div`

display:flex;
text-align:center;
align-items: center;
width:100%;

border-radius:${props=>props.theme.borderRadius};
font-size:${props=>props.theme.fontSize.md};
margin-bottom:20px;
background:${props=>props.theme.colors.background.secondary};
        border:1px solid ${props=>props.theme.colors.border.primary};
${({large})=>
large? css`
        padding: 35px 20px 60px 30px;
        & img{
            width:30%;
            height: 100px;
            max-width:125px;
        }
        & p:first-of-type{
            font-size:16px;
        }
        & p:last-of-type{
            font-size:24px;
            font-weight:bold;
        }
    `:css`
    cursor:pointer;
        padding:15px;
        & img{
            width:20%;
            height: 50px;
            max-width:75px;
        }
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

//Component for displaying image, motivating text and name if kudos is designed for somebody 
const Kudos = ({className,name,imageUrl,text ,large,onClick})=>{
    return(<StyledKudos className={className} large={large} onClick={onClick}>
        <img src={imageUrl.default}/>
        <StyledKudosContent>
            <p>{text}</p>
            <p>{name}</p>
        </StyledKudosContent>
    </StyledKudos>)
}

Kudos.propTypes = {
    imageUrl:PropTypes.object || PropTypes.string ,
    name:PropTypes.string,
    text:PropTypes.string,
    className:PropTypes.string,
    large:PropTypes.bool,
    onClick: PropTypes.func
}
Kudos.defaultProps = {
    name:"Imie nazwisko"
}
export default Kudos
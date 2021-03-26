/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import styled,{css} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


//custom select made to display group names with associated icons

const CustomSelect = ({items,onChange,value})=>{
    const [isOpen,setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = (newValue) => {
        onChange(newValue);
        setIsOpen(false);
      };
    return (<DropDownContainer >
        <DropDownHeader onClick={toggling}>
        <i className={`fas ${value.icon}`}></i>
          {value.content} 
        <FontAwesomeIcon icon={["fas","chevron-down"]} color="black"/>
        </DropDownHeader>
          <DropDownListContainer isOpen={isOpen}>
            <DropDownList>
              {items.map(item => (
                <ListItem onClick={()=>{onOptionClicked(item)}} key={item.id}>
                    <i className={`fas ${item.icon}`}></i>
                  {item.content}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
    </DropDownContainer>)
}
CustomSelect.propTypes = {
    items:PropTypes.array,
    onChange:PropTypes.func,
    value:PropTypes.object
}

const DropDownContainer = styled.div`
`;
const DropDownHeader = styled.div`
display:flex;
    cursor:pointer;
    width: 185px;
    margin-bottom: 5px;
    padding: 5px;
    align-items:center;
    border-radius:${props=>props.theme.borderRadius};
    border: 1px solid ${props=>props.theme.colors.border.secondary};
    & svg:last-of-type{
        margin-left:auto;
    }
    i{
      border-radius:${props=>props.theme.borderRadius};
      background-color:${props=>props.theme.colors.border.secondary};
      padding:5px;
      margin-right:10px;
      color:${props=>props.theme.colors.details.secondary};
    }
`;
const DropDownListContainer = styled.div`
display:none;
position: absolute;
  z-index: 100;
  width: 185px;
  ${({isOpen})=>
    isOpen && css`display:block;`}
`;
const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 5px;
  background: #ffffff;
  border-radius:${props=>props.theme.borderRadius};
border: 1px solid ${props=>props.theme.colors.border.secondary};
  box-sizing: border-box;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;
const ListItem = styled.li`
cursor:pointer;
  list-style: none;
  margin-bottom: 0.8em;
  transition:opacity 0.3s;
  &:hover{
      opacity:0.5;
  }
  i{
    border-radius:${props=>props.theme.borderRadius};
    background-color:${props=>props.theme.colors.border.secondary};
    padding:5px;
    margin-right:10px;
    color:${props=>props.theme.colors.details.secondary};
  }
`;


export default CustomSelect
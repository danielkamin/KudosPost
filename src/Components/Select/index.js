import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledSelect = styled.select`
border-radius:${props=>props.theme.borderRadius};
border: 1px solid ${props=>props.theme.colors.border.secondary};
height:32px;
width:180px;
display:block;`
const StyledOption = styled.option`
`

const CustomSelect = ({items,onChange,value})=>{
    return (<StyledSelect  onChange={onChange} value={value}>
        {items.map(item=>(
            <StyledOption key={item.id} value={item.id}>{item.content}</StyledOption>
        ))}
    </StyledSelect>)
}
CustomSelect.propTypes = {
    items:PropTypes.array,
    text:PropTypes.string,
    onChange:PropTypes.func,
    value:PropTypes.number
}


export default CustomSelect
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledSelect = styled.select`
border-radius:${props=>props.theme.borderRadius};
`
const StyledOption = styled.option`
`

const CustomSelect = ({items})=>{
    return <StyledSelect>
        {items.map(item=>(
            <StyledOption key={item.id}>{item.content}</StyledOption>
        ))}
    </StyledSelect>
}
CustomSelect.propTypes = {
    items:PropTypes.array
}


export default CustomSelect
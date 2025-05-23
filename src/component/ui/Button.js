import React from 'react';
import styled from 'styled-components';

const Styled = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props){
    const { title, onClick } = props;
    return <Styled onClick={onClick}>{title || "button"}</Styled>
}

export default Button;
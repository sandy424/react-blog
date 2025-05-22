import React from 'react';
import styled from 'styled-components';

const Styled = styled.button`
    width: calc(100% - 32px);
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props){
    const {height, value, onChange} = props;
    return <Styled height={height} value={value} onChange={onChange} />;
}
export default TextInput;
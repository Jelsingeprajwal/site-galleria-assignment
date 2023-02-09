import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Div>&#169; Addmen</Div>
    )
}
const Div = styled.div`
    width: 100%;
    background-color: var(--charade);
    height: 10vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default Footer
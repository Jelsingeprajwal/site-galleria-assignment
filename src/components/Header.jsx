import React from 'react'
import styled from 'styled-components'
import '../config/styles.config.css'
function Header() {
    return (
        <NavHeader>
            <h3>Demo Online Aptitude Test</h3>
        </NavHeader>
    )
}
const NavHeader = styled.div`
    
    width: 100%;
    height: 8vh;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--charade);
    color: whitesmoke;
    text-transform: uppercase;
`
export default Header
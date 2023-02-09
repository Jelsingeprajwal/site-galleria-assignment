import React, { useState } from 'react'
import styled from 'styled-components'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

function Hero() {
    const [curr, setCurr] = useState(1);
    const [prevCount, setPrevCount] = useState(1);
    return (
        <Main>
            <Left>
                <LeftSection curr={curr} prevCount={prevCount} setPrevCount={setPrevCount} setCurr={setCurr} />
            </Left>
            <Right>
                <RightSection curr={curr} prevCount={prevCount} setPrevCount={setPrevCount} setCurr={setCurr} />
            </Right>
        </Main>
    )
}
const Main = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2rem;
    justify-content: space-between;
`
const Left = styled.section`
    width: 76vw;

`
const Right = styled.section`
    width: 20vw;

`
export default Hero
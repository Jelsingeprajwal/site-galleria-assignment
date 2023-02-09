import React, { useState } from 'react'
import styled from 'styled-components'
import data from '../data/mcqs.json'
function LeftSection(props) {

    const [i, setI] = useState(0);


    const HandlePrev = () => {
        if (i > 0)
            setI(prevCount => prevCount - 1)
        props.setCurr(prevCount => prevCount - 1)
        console.log(props.curr)
    }
    const HandleNext = () => {
        if (i <= data.length - 2)
            setI(prevCount => prevCount + 1)
        props.setCurr(prevCount => prevCount + 1)
        console.log(props.curr)
        if (document.getElementById(props.curr).style.backgroundColor !== 'blue')
            document.getElementById(props.curr).style.backgroundColor = 'green'
    }

    const HandleReview = () => {
        if (i <= data.length - 2)
            setI(prevCount => prevCount + 1)
        props.setCurr(prevCount => prevCount + 1)
        props.setPrevCount(prevCount => prevCount + 1)
        console.log(props.prevCount)
        document.getElementById(props.curr).style.backgroundColor = "blue"
    }

    const HandleDump = () => {
        console.log(props.curr)
        if (document.getElementById(props.curr).style.backgroundColor === 'green' || document.getElementById(props.curr).style.backgroundColor === 'blue')
            document.getElementById(props.curr).style.backgroundColor = 'white'
    }

    return (
        <div>
            <Subjects>
                <Button style={{ backgroundColor: '#fb6d10' }}>All subjects</Button>
                <Button  >Aptitude</Button>
                <Button  >Reasoning</Button>
                <Button  >Technical</Button>
            </Subjects>
            <QuestionBlock>
                <TopHeader>
                    <p>Q.N0 {data[i].id}</p>
                    <div>
                        View in :
                        <Select>
                            <option value="Eng">English</option>
                            <option value="Germ">German</option>
                            <option value="Fre">French</option>
                        </Select>
                    </div>
                </TopHeader>
                <Question>
                    <Que>{data[i].question}</Que>
                    <OptionsList>
                        <Li>
                            <input type="radio" /> <Label>(A) {data[i].options.A}</Label>
                        </Li>
                        <Li>
                            <input type="radio" /> <Label>(B) {data[i].options.B}</Label>
                        </Li>
                        <Li>
                            <input type="radio" /> <Label>(C) {data[i].options.C}</Label>
                        </Li>
                        <Li>
                            <input type="radio" /> <Label>(D) {data[i].options.D}</Label>
                        </Li>
                    </OptionsList>
                </Question>
            </QuestionBlock>
            <Actions>
                <Button>Clear response</Button>
                <Button onClick={HandleReview}>Review</Button>
                <Button onClick={HandleDump}>Dump</Button>
                <Button onClick={HandlePrev}>Previous</Button>
                <Button onClick={HandleNext}>Next</Button>
            </Actions>
        </div>
    )
}
const Subjects = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 5px;
    /* border: 2px solid black; */
`
const Button = styled.button`
    display: block;
    width: fit-content;
    margin-left: 1rem;
    text-align: center;
    padding:5px 25px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    background-color: var(--button);
    color: white;
    &:hover{
        background-color: var(--estacy);
    }
`
const QuestionBlock = styled.div`
    width: 100%;
    height: 65vh;
    margin:0  1rem ;
    border: 1px solid var(--charade);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    `
const TopHeader = styled.div`
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--charade);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 14px;
    color: white;
    font-weight: 700;
`
const Question = styled.div``
const Select = styled.select`
    margin-left: 5px ;
`
const Que = styled.p`
    margin-left: 5px ;
    padding: 1rem 1rem 0.5rem 1rem;
    font-family: Arial, Helvetica, sans-serif;
    `
const OptionsList = styled.ul`
list-style: none;
margin-left: 5px ;
padding: 0.6rem 1rem;
`
const Li = styled.li`
margin-bottom: 8px;
`
const Label = styled.label``

const Actions = styled.div`
display: flex;
padding: 1rem 0;
`
export default LeftSection
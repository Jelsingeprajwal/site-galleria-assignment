import React from 'react'
import styled from 'styled-components'
import ProfilePic from '../assets/profile.jpg'
import '../config/styles.config.css'
import data from '../data/mcqs.json'
import './../index.css'
var bgColor = "white"
function RightSection(props) {
    let btn = [];
    for (let i = 0; i < data.length; i++) {
        btn.push(<button id={data.id} key={data[i].id} >{data[i].id}</button>)
    }

    return (
        <div>
            <Profile>
                <Image src={ProfilePic}>
                </Image>
                <Details>
                    <span>Time Left: 02:39:09 </span>
                    <span>Nikhil Reddy</span>
                </Details>
            </Profile>
            <QPallete>
                <TopHead>
                    Question Pallete
                </TopHead>
                <QNums>
                    <button id={data[0].id}>{data[0].id}</button>
                    <button id={data[1].id}>{data[1].id}</button>
                    <button id={data[2].id}>{data[2].id}</button>
                    <button id={data[3].id}>{data[3].id}</button>
                    <button id={data[4].id}>{data[4].id}</button>
                    <button id={data[5].id}>{data[5].id}</button>
                    <button id={data[6].id}>{data[6].id}</button>
                    <button id={data[7].id}>{data[7].id}</button>
                    <button id={data[8].id}>{data[8].id}</button>
                    <button id={data[9].id}>{data[9].id}</button>
                </QNums>
            </QPallete>
            <Legend>
                <TopHead>Legend (click to view) </TopHead>
                <Desc>
                    <DescP style={{ backgroundColor: "green" }}>4 Answer</DescP>
                    <DescP style={{ backgroundColor: "red" }}>2 No answer</DescP>
                    <DescP style={{ backgroundColor: "blue" }}>1 Review+Ans</DescP>
                    <DescP style={{ backgroundColor: "yellow", color: 'black' }}>1 Review-Ans</DescP>
                    <DescP style={{ backgroundColor: "grey" }}>1 Dump</DescP>
                    <DescP style={{ backgroundColor: "white", color: 'black' }}>1 No visit</DescP>
                </Desc>
                <P> 10 Questions</P>
                <Submit> Submit</Submit>
            </Legend>
        </div>
    )
}
const Profile = styled.div`
width: 18vw;
border: 1px solid red;
margin-top: 1rem;
padding: .5rem;
background-color: var(--bg-lt);
border-radius: 5px;
display: flex;
font-size: 14px;
line-height: 2rem;
`
const Image = styled.img`
width: 75px;
height: auto;
border-radius: 5px;
margin-right: 10px;
`
const Details = styled.div`
width: 100%;
`
const QPallete = styled.div`
    border: 1px solid red;
    height: 30vh;
    max-height: 300px;
    width: 18vw;
    margin-top: 1rem;
`
const TopHead = styled.div`
     padding: .5rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--charade);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 14px;
    color: white;
`
const QNums = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    margin-left: 10px;
    button {
        width:2.5rem;
        min-width: 50px;
        height: 2rem;
        display: flex;
        border: 1px solid black;
        text-align: center;
        justify-content: center;
        background-color: ${bgColor};
        align-items: center;
        font-size: 14px ;
        font-weight: bold;
        margin-top: 5px;
        margin-left: 5px;
        cursor: pointer;
    }
    
    .solved{

    }

`

const Legend = styled.div`
    border: 1px solid red;
    height: 25vh;
    width: 18vw;
    margin-top: 1rem;

`
const Desc = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`
const DescP = styled.p`
    background-color: black;
    color: white;
    margin: 1px;
    padding: 3px;
`
const Submit = styled.button`
    background-color: var(--charade);
    color: white;
    width: 100%;
    margin: 1rem 1px 1px 1px;
    padding: 5px;
    cursor: pointer;
`
const P = styled.p`
    width: 100%;
    background-color: var(--charade);
    color: white;
    text-align: center;
    padding: 4px;
    border-radius: 3px;
`
export default RightSection
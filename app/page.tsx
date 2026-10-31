import Link from "next/link";
import styled from "styled-components";
import "./globals.css";

const StyledHome = styled.div`
    height: 100vh;
    background-color: #AEAC78;
    color: #4C4541;
    text-align: center;
    padding: 2%; 
`;

const StyledButton = styled.button`
    margin-top: 1%;
    padding: 1.5%;
    background-color: #4C4541;
    color: white;
    font-size: calc(2px + 1vw);
`;

const StyledH1 = styled.h1`
    margin-top: 10%;
    font-size: calc(2px + 4vw);
`;

export default function Home(){
    return(
        <StyledHome>
            <StyledH1>Harvard Art Museum API</StyledH1>
            <h2>CS303 MP4 Project</h2>
            <Link href="/objects"><StyledButton>Look at Objects</StyledButton></Link>
        </StyledHome>
    )
}
import Link from "next/link";
import styled from "styled-components";

const StyledHome = styled.div`
    height: 100vh;
    background-color: #AEAC78;
    color: #4C4541;
    text-align: center;
    padding: 2%; 
`;

export default function Home(){
    return(
        <StyledHome>
            <h1>Home Screen</h1>
            <Link href="/objects"><button>Look at Objects</button></Link>
        </StyledHome>
    )
}
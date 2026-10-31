import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    background-color: #F2C46A;
    gap: 50%; 
    color: #4C4541; 
`;

const StyledNav = styled.nav`
    justify-content: right;
`;

export default function Header(){
    return (
        <StyledHeader>
            <h1>Harvard Art Museum Objects API</h1>
            <StyledNav>
                <ul>
                    <li><Link href="/"><button>Home</button></Link></li>
                    <li><Link href="/objects"><button>Object</button></Link></li>
                </ul>
            </StyledNav>
        </StyledHeader>
    )
}
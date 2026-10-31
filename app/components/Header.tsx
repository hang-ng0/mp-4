import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    background-color: #F2C46A;
    gap: 50%; 
    color: #4C4541; 
    padding: 1.5%;
`;

const StyledNav = styled.nav`
    justify-content: right;
`;

const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
`;

const StyledLi = styled.li`
    background: #4C4541;
    text-align: center;
    margin: 5%;
    padding: 5%;
    font-size: calc(2px + 1.5vw);
`;

const StyledLink = styled(Link)` //has to put it in () instead of . because Link is not a usual html tag, it was imported
    color: white;
    text-decoration: none;
`;

export default function Header(){
    return (
        <StyledHeader>
            <h1>Harvard Art Museum Objects API</h1>
            <StyledNav>
                <StyledUl>
                    <StyledLi><StyledLink href="/">Home</StyledLink></StyledLi>
                    <StyledLi><StyledLink href="/objects">Object</StyledLink></StyledLi>
                </StyledUl>
            </StyledNav>
        </StyledHeader>
    )
}
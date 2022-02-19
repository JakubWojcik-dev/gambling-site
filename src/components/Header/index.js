import React from "react";
import Logo from "../../logo.svg"
import { Wrapper, ContentHeader, Img, HeaderContext,Test,SingleItem, ButtonLog,Main, ContentButton, ButtonReg } from "./Header.styles";


const Header = () =>{
    return(
        <Main>

            <Wrapper>

                <ContentHeader>

                    <Img src={Logo}/>
                    
                    <SingleItem>Wheel</SingleItem>
                    <SingleItem>Roulette</SingleItem>
                    <SingleItem>Crash</SingleItem>
                    <SingleItem>Duels</SingleItem>
                    <SingleItem>Casino</SingleItem>

                </ContentHeader>

                <ContentButton>

                    <ButtonLog>Log in</ButtonLog>
                    <ButtonReg>Register</ButtonReg>

                </ContentButton>

            </Wrapper>

            <HeaderContext>

                    <SingleItem>Affiliates</SingleItem>
                    <SingleItem>Rewards</SingleItem>
                    <SingleItem>Fairness</SingleItem>
                    <SingleItem>Leaderboards</SingleItem>
                    <SingleItem>VIP Program</SingleItem>

            </HeaderContext>

            <Test/>

        </Main>
    
    )
}

export default Header;
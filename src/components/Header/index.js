import React,{useState} from "react";
import Logo from "../../logo.svg"
import { Wrapper, ContentHeader, Img, HeaderContext,Test,SingleItem, ButtonLog,Main, ContentButton, ButtonReg } from "./Header.styles";
import { Linked } from "./Header.styles";
import Sidebar from "../Sidebar";
import Wheel from "../Wheel";
import { Link,BrowserRouter as Router } from "react-router-dom";
import Key from "../../key.png"
const Header = () =>{
    
    return(
       
        <Main>
            
            <Wrapper>

                <ContentHeader>

                    <Img />
                    
                    <Linked to="/wheel" ><SingleItem>Wheel</SingleItem></Linked>
                    <Linked to="/roulette"><SingleItem>Roulette</SingleItem></Linked>
                    <Linked to="/crash"><SingleItem>crash</SingleItem></Linked>
                    <Linked to="/duels"><SingleItem>duels</SingleItem></Linked>
                    <Linked to="/casino"><SingleItem>casino</SingleItem></Linked>

                </ContentHeader>
                
                <ContentButton>
                    <ButtonLog>Log in</ButtonLog>
                    <ButtonReg><img src={Key} height="20px" width="20px"></img>Register</ButtonReg> 
                    
                    
                   

                </ContentButton>
               

            </Wrapper>

            <HeaderContext>
                <Linked to="/affiliates"><SingleItem>Affiliates</SingleItem></Linked>
                <Linked to="/Rrwards"><SingleItem>Rewards</SingleItem></Linked>
                <Linked to="fFairness"><SingleItem>Fairness</SingleItem></Linked>
                <Linked to="lLeaderboards"><SingleItem>Leaderboards</SingleItem></Linked>
                <Linked to="/vip-Program"><SingleItem>VIP Program</SingleItem></Linked>
                   
                    
                    


            </HeaderContext>
            
            
            
            
            
            

        </Main>
        
    )
}

export default Header;
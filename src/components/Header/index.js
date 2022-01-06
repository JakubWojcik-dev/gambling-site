import React from "react";

import { Wrapper, Content, Img, HeaderContext,Test } from "./Header.styles";


const Header = () =>{
    return(
        <div>
            <Wrapper>
                <Content>
                    <Img/>
                </Content>
            </Wrapper>
            <HeaderContext/>
            <Test/>
        </div>
    
    )
}

export default Header;
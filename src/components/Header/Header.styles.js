import styled from "styled-components";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
position: fixed;
top: 0;
display: flex;
width: 100%;
height: 85px;
background-color: var(--grey-main);
color: var(--text-gray);

`
export const Linked = styled(Link)`
text-decoration: none;

`
export const ContentHeader = styled.div`

display: flex;
justify-content: center;
width:80%;
align-items: center;
@media (max-width: 912px) {
    opacity: 0;
    pointer-events: none;
    width: 60vmin;
  }

`
export const ContentButton = styled.div`

display: flex;
justify-content: center;
width:20%;
align-items: center;
margin-right: 20px;
`
export const SingleItem = styled.div`

text-decoration: none;
cursor: pointer;
display: flex;
font-size: 19px;
height: 85px;
color: var(--smoke-dark);
width: auto;
margin: 0 25px;
justify-content: center;
align-items: center;
:hover{
    color: var(--text-hover);
}
`
export const Main = styled.div`


`
export const ButtonLog = styled.button`

height: 35px;
width: 115px;
min-width: 85px;
min-height: 30px;
font-size: 16px;
color: var(--text-gray);
text-align: center;
justify-content: center;
align-items: center;
background-color: var(--red);
margin: 0 10px;
border: none;
border-radius: 0.5vmin;
`
export const ButtonReg = styled.button`

display: flex;
height: 35px;
width: 135px;
min-width: 100px;
min-height: 30px;
font-size: 16px;
color: var(--grey-lighter);
text-align: center;
margin: 0 10px;
padding: 0 10px;
justify-content: space-around;
align-items: center;
//text-align: center;
background-color: var(--white);
border: none;
border-radius: 0.5vmin;
`

export const Img = styled.img`


`

export const HeaderContext = styled.div`
position: fixed;
top: 85px;
display: flex;
//margin-left: 265px;
align-items: center;
width: 100%;
height: 52px;
background-color: var(--grey-darker);
color: var(--text-gray);
    

`
export const Test = styled.div`

width: 100%;
height: 1520px;
background-color: var(--grey-main);
color: var(--text-gray);
`
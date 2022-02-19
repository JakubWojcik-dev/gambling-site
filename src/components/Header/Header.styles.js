import styled from "styled-components";

export const Wrapper = styled.div`
position: sticky;
top: 0;
display: flex;
width: 100%;
height: 85px;
background-color: var(--grey-main);
color: var(--text-gray);

`

export const ContentHeader = styled.div`

display: flex;
justify-content: center;
width:80%;
align-items: center;

`
export const ContentButton = styled.div`

display: flex;
justify-content: center;
width:20%;
align-items: center;

`
export const SingleItem = styled.div`


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
font-size: 16px;
color: var(--text-gray);
text-align: center;
justify-content: center;
align-items: center;
background-color: var(--red);
margin: 0 10px;
border: none;

`
export const ButtonReg = styled.button`

height: 35px;
width: 135px;
font-size: 16px;
color: var(--grey-lighter);
text-align: center;
margin: 0 10px;
justify-content: center;
align-items: center;
background-color: var(--white);
border: none;

`

export const Img = styled.div`


`

export const HeaderContext = styled.div`
position: sticky;
top: 85px;
display: flex;

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
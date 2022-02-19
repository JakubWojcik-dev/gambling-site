import styled from "styled-components";

export const Wrapper = styled.div`
position: fixed;
left:0;
width: 265px;
height: 100%;
top: 0;
background-color: var(--black-ter);




`
export const TestDiv2 = styled.div`
position: absolute;
width: 250px;
height: 100%;
top: 0px;
left: -250px;
background-color: var(--danger);
transition: transform 1.5s linear;

transform: translateX(-250px);

`
export const Button = styled.button`



background-color: var(--light);
:hover{
    ${Wrapper}{
        background-color: blue;
    }
    background-color: gray;
    
}
:focus{

${Wrapper} &{
    transition: transform 0.45s linear;
    transform: translateX(350px);
    background-color: blue;
}    
width:50px;
height:30px;
//background-color: green;
}
`
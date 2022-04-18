import styled from "styled-components";

export const Wrapper = styled.div`
position: fixed;
left:0;
width: 265px;
height: 100vh;
top: 0;
background-color: var(--black-ter);




`
export const TestDiv = styled.div`
position: fixed;
width: 265px;
height: 100vh;
top: 0;
left: 0vw;
background-color: var(--black-ter);
transition: 350ms;

`
export const TestDiv2 = styled.div`
position: fixed;
width: 265px;
height: 100vh;
top: 0;
left: -100vw;
background-color: var(--black-ter);
transition: 850ms;

`
export const Button = styled.button`



background-color: var(--light);
:hover{
    ${Wrapper}{
        background-color: blue;
    }
    background-color: gray;
    
}
//:focus{

//${Wrapper} &{
//    transition: transform 0.45s linear;
//    transform: translateX(350px);
//    background-color: blue;
//}    
//width:50px;
//height:30px;
//background-color: green;
//}
`
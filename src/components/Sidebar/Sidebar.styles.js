import styled from "styled-components";

export const Wrapper = styled.div`
position: fixed;
left:0;
width: 265px;
height: 100%;
top: 0;
background-color: var(--black-ter);




`
export const TestDiv = styled.div`
width:300px;
height:300px;
background-color: var(--black-ter);

`
export const TestDiv2 = styled.div`
position: fixed;
width: 350px;
height: 100%;
top: 0px;
left: 0px;
background-color: var(--black-ter);

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
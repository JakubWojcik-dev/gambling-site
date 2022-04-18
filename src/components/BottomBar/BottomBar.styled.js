import styled from 'styled-components'

export const Bar = styled.div`

position: fixed;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
opacity: 0;
left:0;
bottom: 0;
height:6vh;
background-color: var(--grey-darker);
@media (max-width: 912px) {
    opacity: 1;
  }
`

export const Img = styled.img`

color: var(--smoke-dark);
width: 5vmax;
height: 5vmax;

`
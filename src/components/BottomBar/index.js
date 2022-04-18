import React from 'react'
import { Bar, Img } from './BottomBar.styled'
import fortune from '../../fortune2.jpg'
import wheel from '../../wheel1.png'
import icon from '../../menu-icon.png'
const BottomBar = () =>{



    return(
        <Bar>

            <Img src={fortune}/>
            <Img src={wheel}/>
            <Img src={icon}/>
        </Bar>
    )
}

export default BottomBar
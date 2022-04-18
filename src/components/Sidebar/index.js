import React, {useState} from "react";
import { Button, Wrapper,TestDiv2,TestDiv } from "./Sidebar.styles";
import { animated, useTransition, useSpring} from 'react-spring'
import Header from "../Header";
const Sidebar = () =>{

    
    const [sidebar, setSidebar] = useState(false)
    const props = useSpring({ x: sidebar ? 0 : -265 })
    
    
    return(
        
        <div>
            
            <Header onchange={sidebar}/>
            <animated.div style={props}><Wrapper><Button onClick={() => setSidebar(!sidebar)}/></Wrapper></animated.div>
            
            
            
           
            
            <Button onClick={() => setSidebar(!sidebar)}/>
            
           
            
            
        </div>
        
    )

}

export default Sidebar
import React, {useState} from "react";
import { Button, Wrapper,TestDiv2,TestDiv } from "./Sidebar.styles";
import { animated, useTransition, useSpring} from 'react-spring'
const Sidebar = () =>{

    const [hide, setHide] = useState(false)
    
    const props = useSpring({ x: hide ? 0 : 265 })
    
    
    return(
        
        <div>
            
            
            <animated.div style={props}><Wrapper><Button onClick={() => setHide(!hide)}/></Wrapper></animated.div>
            <Button onClick={() => setHide(!hide)}/>
            
           
            
            
            
           
            
            
        </div>
        
    )

}

export default Sidebar
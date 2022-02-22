import React, {useState} from "react";
import { Button, Wrapper,TestDiv2 } from "./Sidebar.styles";
import { animated, useTransition} from 'react-spring'
const Sidebar = () =>{

    const [hide, setHide] = useState(true)
    const transition = useTransition(hide, {
        from: { x:-265, y: 0
                },
        enter: {x:0, y: 0 },
        leave: {x:-265, y: 0 },
    })
    return(
        
        <div>
            
            {transition((style, item) =>
            item ? <Wrapper><Button onClick={() => setHide(!hide)}/></Wrapper> : ""
            )}
            <Button onClick={() => setHide(!hide)}/>
            
           
            
            
            
           
            
            
        </div>
        
    )

}

export default Sidebar
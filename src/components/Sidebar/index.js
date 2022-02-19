import React, {useState} from "react";
import { Button, Wrapper,TestDiv2 } from "./Sidebar.styles";

const Sidebar = () =>{

    const [hide, setHide] = useState(true)

    return(
        
        <div>
            
            <Wrapper>
            <Button onClick={() => setHide(!hide)}/>
            </Wrapper>
           
            
            
            
           
            
            
        </div>
        
    )

}

export default Sidebar
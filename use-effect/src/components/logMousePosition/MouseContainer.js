import React ,{useState,useEffect} from 'react'
import HookMouse from './HookMouse';

export default function MouseContainer() {
    const [display,setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {display && <HookMouse />}
        </div>
    )
}

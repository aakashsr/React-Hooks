import React, {useState , useEffect} from 'react'
import randomcolor from 'randomcolor'

export default function ColourfulCounter() {
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("");

    useEffect(() =>{
        const newColor = randomcolor();
        console.log(newColor);
        setColor(newColor);
    },[count])

    return (
        <div style={{textAlign: "center"}}>
            <h1 style={{color:color}}>{count}</h1>
            <button style={{backgroundColor:'aqua',borderRadius:'4px',padding:'8px 12px'}} onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}

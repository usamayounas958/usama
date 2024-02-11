import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + alpha)
        let newalpha = alpha.toUpperCase();
        setAlpha(newalpha);
    }

    const handleOnChange =(event)=>{
        // console.log("On Change clicked");
        setAlpha(event.target.value);
       
    }

    const handleCapClick=()=>{
        let newalpha = alpha.charAt(0).toUpperCase() + alpha.slice(1);
        setAlpha(newalpha);
    }

    const handleLoClick =()=>{
        // console.log("Uppercase was clicked" + alpha)
        let newalpha = alpha.toLowerCase();
        setAlpha(newalpha);
        props.showAlerts("converted to lowercase", "success");
    }

    const handleClsClick =()=>{
        let newalpha = '';
        setAlpha(newalpha);
    }

    const handleCopyClick=()=>{
        var uso = document.getElementById("mybox");
        uso.select();
        navigator.clipboard.writeText(uso.value);
    }

    const[alpha, setAlpha] = useState('Enter text');
    
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark' ? 'white': 'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={alpha} style={{backgroundColor: props.mode ==='light' ? 'gray': 'white', color: props.mode ==='dark' ? 'black': 'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
       <button className="btn btn-primary mx-3" onClick={handleClsClick}>Clear text</button>
       <button className="btn btn-primary mx-3" onClick={handleCapClick}>Capatalize first letter</button>
       <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy text</button>

    </div>
    <div className="conatiner my-4" style={{color: props.mode ==='dark' ? 'white': 'black'}}>
        <h1>Your Text summary</h1>
        <p>{alpha.split(" ").length} words, {alpha.length} characters</p>
        <p>{0.008 *alpha.split(" ").length } Minutes to read this</p>
        <h2>Preview</h2>
        <p>{alpha}</p>
    </div>
    </>
  )
}

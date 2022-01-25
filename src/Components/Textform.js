import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick= () =>{
    let uptext=text.toUpperCase();
    setText(uptext);
    props.showAlert("Converted to Uppercase","success");
    }
    const handleloClick= () =>{
        let lotext=text.toLowerCase();
        setText(lotext);
        
    props.showAlert("Converted to Lowercase","success");
        }
    const handleOnChange= (event) =>{
        setText(event.target.value);
        }
        const handleClear= () =>{
            setText('');
            props.showAlert("Text Cleared","success");
        }
    const[text,setText]=useState('');
  return (
      <>
      <div className= "container" style= {{color: props.mode==='dark'? 'white':'black'}}>
   <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white',color: props.mode==='dark'? 'white':'black'}} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
</div>
<div className= "container my-3" style= {{color: props.mode==='dark'? 'white':'black'}}>
    <h2> Your Summary</h2>
    <p> Number of Character: {text.length}</p>
    <p> Number of words :{text.split(/[^\s]+/).length-1} </p>
    <h2>Preview</h2>
    <p> {text.length>0?text:"Enter something in the textbox above"} </p>
</div>
    </>
  )
}

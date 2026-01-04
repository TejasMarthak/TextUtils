import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed!", "success");
    }

    const [text, setText] = useState('');
    //text = "new text"; //wrong way to change the state
    //setText("new text"); //correct way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower case</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.48 * text.split(" ").length} Seconds to read this text.</p> {/*time to read text entered in seconds*/}
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
            </div>
        </>
  )
}

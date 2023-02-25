import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    const handleUppercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handleLowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const handleCopy = () => {
        let text = document.getElementById('mybox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraspace = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(' '))
    }
    return (
        <>
            <div>
                <h2 className='container' htmlFor="container floatingTextarea">{props.heading}</h2>
                <div className="form-floating container">
                    <textarea onChange={handleOnChange} value={text} rows='20' className="form-control" placeholder="Leave a comment here" id="mybox"></textarea>
                    <br />
                    <button onClick={handleUppercase} type="button" className="mx-1 my-1 btn btn-primary">Convert to Uppercase</button>
                    <button onClick={handleLowercase} type="button" className="mx-1 my-1 btn btn-primary">Convert to LowerCase</button>
                    <button onClick={handleCopy} type="button" className="mx-1 my-1 btn btn-primary">Copy to ClipBoard</button>
                    <button onClick={handleExtraspace} type="button" className="mx-1 my-1 btn btn-primary">Remove Extra Space</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>
                    Your text summary</h1>
                <p>
                    {(text.split(' ').length)} words and {text.length} charecters it is {(text.split(' ').length) * 50 / 125} minutes long
                </p>
                <h2>
                    Preview
                </h2>
                <p>{text}</p>
            </div>
        </>
    )
}
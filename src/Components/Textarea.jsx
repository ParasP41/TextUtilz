import React from 'react'
import { useState } from 'react'
export default function Textarea(props) {
    const [text, setText] = useState("");


    const handlerUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Upper Case","Success!");
    }
    const handlerLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Lower Case","Success!");

    }
    const handlerClear = () => {
        setText("");
        props.showAlert("Text cleared","Success!");

    }
    const handlerChange = (element) => {
        setText(element.target.value);
    }
    const handlerCopy = () => {
        props.showAlert("Text copied","Success!");
        navigator.clipboard.writeText(text);
    }
    const handlerDownload=()=>
    {
        const blob = new Blob([text], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Document.txt';
        a.click();
        URL.revokeObjectURL(url);
        props.showAlert("Document Downloading","Success!");
    }
    return (
        <div className='my-4'>
            <div className='md:max-w-screen-xl flex flex-wrap items-center justify-between md:mx-auto md:p-4 px-4'>
                <label htmlFor="message" className="block mb-2 text-xl md:text-4xl font-medium ">Enter the text to analyze bellow</label>
                <textarea id="message" value={text} onChange={handlerChange} rows="12" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                <div>
                    <button disabled={text.length===0} onClick={handlerUpperCase} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mb-2 my-3">UpperCase</button>
                    <button disabled={text.length===0} onClick={handlerLowerCase} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mb-2 my-3">LowerCase</button>
                    <button disabled={text.length===0} onClick={handlerClear} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mb-2 my-3">Clear text</button>
                    <button disabled={text.length===0} onClick={handlerCopy} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mb-2 my-3">Copy text</button>
                    <button disabled={text.length===0} onClick={handlerDownload} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mb-2 my-3">Download Document</button>
                </div>
            </div>
            <div className='max-w-screen-xl items-center justify-between mx-auto px-4 '>
                <h1 className='md:text-5xl text-3xl font-semibold'>Your text summery</h1>
                <p className='my-3 text-xl'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word and {text.length} Characters</p>
                <p className='my-3 text-xl'>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)*0.008} Minutes read</p>
                <h2 className='text-2xl md:text-4xl font-semibold '>Preview</h2>
                <p className='text-xl my-2'>{text == "" ? "Nothing to preview" : text}</p>
            </div>

        </div>
    )
}

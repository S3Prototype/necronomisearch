import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function generateKey(){return Math.floor(Math.random()*Math.floor(200000))}

function BookResult(props) {
    return (
        <>
            <span key={generateKey()} className="book-title">{props.title}</span>
            {props.matches.map(match=>
                <div
                    onClick={()=>{props.revealTextModal(match)}}
                    key={generateKey()} className="text-result show">
                        <p>{ReactHtmlParser(match)}</p>
                </div>)
            }
        </>
    )
}

export default BookResult

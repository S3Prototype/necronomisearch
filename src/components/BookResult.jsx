import React from 'react'

function BookResult(props) {
    return (
        <>
            <span key={Math.floor(Math.random())*10} className="book-title">{props.title}</span>
            {props.matches.map(match=>
                <div
                    onClick={()=>{props.revealTextModal(match.item.text)}}
                    key={match.refIndex} className="text-result">
                        {match.item.text}
                </div>)
            }
        </>
    )
}

export default BookResult

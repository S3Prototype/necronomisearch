import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function TextModal(props) {
    return (
        <div className="text-modal">
            <div className="text-modal-background" onClick={props.hideTextModal}></div>
            <div className="selected-text" onClick={null}>
                <button onClick={props.hideTextModal} id="back-to-results-button" className="back-to-results-button">Back to Search</button>
                <span className="raw-selected-text">{ReactHtmlParser(props.selectedText)}</span>
            </div>
        </div>
    )
}

export default TextModal

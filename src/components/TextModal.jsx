import React from 'react'

function TextModal(props) {
    return (
        <div className="text-modal">
            <div className="text-modal-background" onClick={props.hideTextModal}></div>
            <div className="selected-text" onClick={null}>
                {props.selectedText}
            </div>
        </div>
    )
}

export default TextModal

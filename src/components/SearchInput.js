import React, {useRef} from 'react'
// import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


const SearchInput = (props) => {
    const inputRef = useRef(null)

    function search(){
        // console.log(inputRef.current.value);
        props.submitSearch(inputRef.current.value);
    }

    function keyProcess(e){
        const pressedKey = e.code || e.which || e.keyCode || e.key;
        if (pressedKey === 'Enter' || pressedKey === 13) {
            search();
        }
    }

    return (
        <div className="search-input-container">
            <FontAwesomeIcon icon={faSearch} />
            <input ref={inputRef} className="search" onKeyDown={keyProcess} type="text" placeholder="Search Here"/>
            <button className="search-button" onClick={search}>Search</button>
        </div>
    )
}

export default SearchInput

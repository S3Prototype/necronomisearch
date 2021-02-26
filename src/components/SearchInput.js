import React from 'react'
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


const SearchInput = (props) => {
    return (
        <div className="search-input-container">
            <FontAwesomeIcon icon={faSearch} />
            <input className="search" type="text" placeholder="Search Here"/>
            <button className="search-button" onClick={props.submitSearch}>Search</button>
        </div>
    )
}

export default SearchInput

import React from 'react'
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faSearch} from '@fortawesome/free-solid-svg-icons'

const SearchInput = () => {
    return (
        <div className="search-input-container">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search Here"/>
            <button>Search</button>
        </div>
    )
}

export default SearchInput

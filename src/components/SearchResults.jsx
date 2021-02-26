import React from 'react'

function SearchResults(props) {
    return (
        <div className="search-results-container ui-container">            
            <div className="search-menu">
                <button className="home search-menu-item" onClick={()=>props.setShowResults(false)}>Home</button>
                <button className="search-again search-menu-item">Search Again</button>
            </div>
            <div className="results">
                {props.results.map(result=><div className="result">result</div>)}
            </div>
        </div>
    )
}

export default SearchResults

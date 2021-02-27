import React from 'react'
import BookResult from './BookResult'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAws } from '@fortawesome/free-brands-svg-icons'

function SearchResults(props) {
    console.log("SearchResult Component goT:", props.results[0]);
    return (
        <div className="search-results-container show ui-container">            
            <div className="search-menu">
                <button className="home search-menu-item" onClick={()=>props.setShowResults(false)}>Home</button>
                {/* <button className="search-again search-menu-item">Search Again</button> */}
            </div>
            <div className="results">
                {props.results.map((result)=><BookResult revealTextModal={props.revealTextModal} title={result.title} matches={result.matches}/>)}
                {/* {document.querySelectorAll("query-text").forEach(text=>text.scrollIntoView())} */}
            </div>
            <div className="aws-amplify">
                Powered by AWS Amplify 
                <span>
                    <FontAwesomeIcon icon={faAws} />
                </span>
            </div>
        </div>
    )
}

export default SearchResults

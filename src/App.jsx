import './index.css';
import Searchform from './components/Searchform';
import SearchResults from './components/SearchResults';
import {useState, useEffect} from 'react';
import {getSearchResults} from './utils/GetSearchResults';

function App() {

  const [showResults, setShowResults] = useState(false);
  let bookSearchResults = [];

  const toggleShowResults = ()=>setShowResults(!showResults);

  // ! TODO 2/26/21:
  // Need to implement use effect to query db whenever search button pressed.
  // First just get the text from the db as proof it works.

  //Put code here to toggle search results window.
  //pass the usestate function down to searchform
  //it should trigger usestate when a user clicks search.
  //and then it should toggle the results window off when the user
  //clicks a button in the search window or presses back on their phone.

  // * That use state stuff will be called after search results are gotten.

  return (
    <div className="App ui-container">
      {showResults ?
        <SearchResults setShowResults={setShowResults} results={bookSearchResults}/> :
        <Searchform toggleShowResults={toggleShowResults} />
      }
    </div>
  );
}

export default App;

import './index.css';
import Searchform from './components/Searchform';
import SearchResults from './components/SearchResults';
import {useState} from 'react';
import {getSearchResults, processResults} from './components/GetSearchResults';
import TextModal from './components/TextModal';
import NoResultsModal from './components/NoResultsModal';

function App() {

  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showTextModal, setShowTexTModal] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [showNoResultsModal, setShowNoResultsModal] = useState(false);
  const [storedSearches, setStoredSearches] = useState([]);

  const MAX_STORED_SEARCHES = 5;

  function hideTextModal(){
    setShowTexTModal(false);
  }

  function revealTextModal(text){
    setSelectedText(text)
    setShowTexTModal(true);
  }

  function storeSearch(search){
    
    const storeIndex = storedSearches.length >= MAX_STORED_SEARCHES ?
            0 : storedSearches.length;
    // let tempStoredSearch = storedSearches;
    // tempStoredSearch[storeIndex] = search;
    storedSearches[storeIndex] = search;
    setStoredSearches(storedSearches);
    console.log("Stored search! ", storedSearches[storeIndex]);
  }

  function activateSearchResults(resultItems){
    setSearchResults(resultItems);
    setShowResults(true);
  }

  function getExistingSearch(bookList, query){
    return storedSearches.find(search=>{        
        if(bookList.length !== search.bookList.length) return false;
        
        let booksMatch = true;
        for(let i = 0; i < bookList.length && booksMatch; i++){
          if(bookList[i] !== search.bookList[i]) booksMatch = false;
        }
        return booksMatch && search.query === query;
      }
    );
  }

  function searchForBooks(bookList, query){
    if(!bookList || bookList.length <= 0 || !query || query.length <= 1)
      return activateNoResultsModal();
    
      //If we've already searched this exact thing, don't ping the DB.
    const alreadyStoredSearch = getExistingSearch(bookList, query);
    if(alreadyStoredSearch){
      console.log("Using already stored search!");
      activateSearchResults(alreadyStoredSearch.resultItems);
      return;
    }

    getSearchResults(bookList)
    .then(content=>{
      console.log("App got:", content[0].data.getBookContent.bookShortName);
      // processResults(content, query);
      const resultItems = processResults(content, query);
      if(resultItems.length > 0 && resultItems[0].matches?.length > 0){        
        activateSearchResults(resultItems);
        storeSearch({bookList, query, resultItems});
        return;
      }
      
      activateNoResultsModal();
      return;
    });
  }

  function activateNoResultsModal(){
    setShowNoResultsModal(true);
    //show popup modal that says "No results found";
    setTimeout(()=>{
      //hide the modal
      setShowNoResultsModal(false);
    }, 2500);
  }

  return (
    <div className="App ui-container">
      {showNoResultsModal && <NoResultsModal />}

      {showTextModal && <TextModal selectedText={selectedText} hideTextModal={hideTextModal} />}

      {showResults ?
        <SearchResults revealTextModal={revealTextModal} setShowResults={setShowResults} setSelectedText={setSelectedText} results={searchResults}/> :
        <Searchform searchForBooks={searchForBooks} />
      }
    </div>
  );
}

export default App;

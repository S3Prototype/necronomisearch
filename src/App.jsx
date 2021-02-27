import './index.css';
import Searchform from './components/Searchform';
import SearchResults from './components/SearchResults';
import {useState, useEffect} from 'react';
import {getSearchResults, processResults} from './components/GetSearchResults';
import TextModal from './components/TextModal';
import NoResultsModal from './components/NoResultsModal';

function App() {

  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showTextModal, setShowTexTModal] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [showNoResultsModal, setShowNoResultsModal] = useState(false)

  function hideTextModal(){
    setShowTexTModal(false);
  }

  function revealTextModal(text){
    setSelectedText(text)
    setShowTexTModal(true);
  }

  function searchForBooks(bookList, query){
    /*Should probably not return promise here.
    In GetSearchResults.js, we should probably
    be taking the promise from getSearchResults and then
    calling processResults as an async function.
    Only when it's all resolved should we then show results.
    But before calling all that code, show a popup modal with
    a loading icon. Prefer a gif over a css load spinner*/
    getSearchResults(bookList)
    .then(content=>{

      console.log("App got:", content[0].data.getBookContent.bookShortName);
      // processResults(content, query);
      const resultItems = processResults(content, query);
      if(resultItems?.matches.length > 0){
        setSearchResults(resultItems);
        setShowResults(true);
      } else {
        setShowNoResultsModal(true);
        //show popup modal that says "No results found";
        setTimeout(()=>{
          //hide the modal
          setShowNoResultsModal(false);
        }, 3000);
      }
    });
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

import React from 'react'
import SearchInput from './SearchInput'
import SearchChecklist from './SearchChecklist'
import {useState, useEffect} from 'react'
const Searchform = () => {

    const [chosenBooks, setChosenBooks] = useState([]);

    let toggleChosenBooks = (bookID) =>{  
        console.log("CHOSEN AT START:", chosenBooks);

        let tempBooks = chosenBooks;

        let prevLength = chosenBooks.length;
        tempBooks = tempBooks.filter(currentBook=>currentBook !== bookID);
        if(tempBooks.length === prevLength) tempBooks.push(bookID);

        console.log("Current books:", tempBooks);
        setChosenBooks(tempBooks);
    }

    let searchForBooks = ()=>{
        
    }

    //Create a function here that toggles if a value is in an array
    //Pass that function down to seachchecklist
    //Have an onclick for the whole li. When it's clicked, trigger this toggle
    //function, but pass in data about which name it is. Now that's the hard part.
    return (
        <main className="search-form-container">
            <h1 className="title">NecronomiSearch</h1>
            <p className="description">Search through all H.P. Lovecraft books.</p>                        
            <SearchInput searchForBooks={searchForBooks}/>
            <SearchChecklist toggleChosenBooks={toggleChosenBooks} />
            <div className="contact-info">
                <p>Made by <a href="https://twitter.com/shaquilhansford" target="blank">@shaquilhansford</a></p>
                <p>Art by <a href="https://andreewallin.com/" target="blank">Andrée Wallin</a></p>
            </div>
        </main>
    )
}

export default Searchform

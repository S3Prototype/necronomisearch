import React from 'react'
import '../index.css';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
// import awsconfig from '../aws-exports.js';
// import {AmplifySignOut, withAuthetnicator} from '../aws-amplify/ui-react';
import {listBooks} from '../graphql/queries';
import {useState, useEffect, useRef} from 'react';

const awsconfig = {
    "aws_project_region": process.env.REACT_APP_PROJECT_REGION,
    "aws_appsync_graphqlEndpoint": process.env.REACT_APP_APPSYNC_GRAPHQLENDPOINT,
    "aws_appsync_region": process.env.REACT_APP_APPSYNC_REGION,
    "aws_appsync_authenticationType": process.env.REACT_APP_APPSYNC_AUTHENTICATIONTYPE,
    "aws_appsync_apiKey": process.env.REACT_APP_APPSYNC_APIKEY
};

Amplify.configure(awsconfig);

const SearchChecklist = (props) => {
    // // console.log(process.env);
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetchBooks();
    }, []);

    const fetchBooks = async ()=>{
        try{
            const bookData = await API.graphql(graphqlOperation(listBooks));
            const bookList = bookData.data.listBooks.items;
            // console.log("Book list: ", bookList);
            setBooks(bookList);
        } catch(error){
            // console.log("Error fetching books from gql api!", error);
        }
    }

    // function addToChosenBooks()

    const inputRef = useRef(null)
    // function testFunc(){
    //     props.toggleBook(inputRef.current.value);
    //     // console.log(inputRef.current.name);
    // }

    return (
        <div className="books">
            <ul className="booklist">
                {books.map(book=>{
                    return <li>
                        <input className="book-checkbox" onClick={()=>props.toggleChosenBooks(book.bookContentID)} ref={inputRef} type="checkbox" value={book.bookContentID} name={book.bookShortName} />                        
                        <label for={book.bookShortName}>{book.bookTitle}</label>
                    </li>
                })}
                {   
                    document.querySelectorAll('input.bookCheckBox')
                    .forEach(checkbox=>checkbox.checked = false)
                }


                {/* <li>
                    <input className="checkbox" type="checkbox" value="The Call of Cthulhu" name="cthulhu" />
                    <label for="cthulhu">The Call of Cthulhu</label>
                </li>
                <li>
                    <input className="checkbox" type="checkbox" value="The Whisperer in Darkness" name="whisperer" />
                    <label for="whisperer">The Whisperer in Darkness</label>
                </li>
                
                <li>
                    <input className="checkbox" type="checkbox" value="The Dunwich Horror"></input>
                    <label for="dunwich">The Dunwich Horror</label>
                </li>
                
                <li>
                    <input className="checkbox"type="checkbox" value="At the Mountains of Madness"></input>
                    <label for="mountains">At the Mountains of Madness</label>
                </li>
                
                <li>
                    <input className="checkbox" type="checkbox" value="The Shadow Over Innsmouth"></input>
                    <label for="innsmouth">The Shadow Over Innsmouth</label>
                </li> */}
            </ul>
        </div>
    )
}

export default SearchChecklist

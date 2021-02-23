import React from 'react'
import SearchInput from './SearchInput'
import SearchChecklist from './SearchChecklist'
const Searchform = () => {
    return (
        <main>
            <h1>NecronomiSearch</h1>
            <p>Search through all H.P. Lovecraft books.</p>                        
            <SearchInput />
            <SearchChecklist />       
        </main>
    )
}

export default Searchform

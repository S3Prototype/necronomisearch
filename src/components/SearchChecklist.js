import React from 'react'

const SearchChecklist = () => {
    return (
        <div className="checkboxes">
            <ul>
                <li>
                    <input type="checkbox" value="The Call of Cthulhu" name="cthulhu" />
                    <label for="cthulhu">The Call of Cthulhu</label>
                </li>
                <li>
                    <input type="checkbox" value="The Whisperer in Darkness" name="whisperer" />
                    <label for="whisperer">The Whisperer in Darkness</label>
                </li>
                
                <li>
                    <input type="checkbox" value="The Dunwich Horror"></input>
                    <label for="dunwich">The Dunwich Horror</label>
                </li>
                
                <li>
                    <input type="checkbox" value="At the Mountains of Madness"></input>
                    <label for="mountains">At the Mountains of Madness</label>
                </li>
                
                <li>
                    <input type="checkbox" value="The Shadow Over Innsmouth"></input>
                    <label for="innsmouth">The Shadow Over Innsmouth</label>
                </li>
            </ul>
        </div>
    )
}

export default SearchChecklist

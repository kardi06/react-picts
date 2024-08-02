import { useState } from "react";

function SearchBar({onSubmit}) {
    const [term,setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleOnchange = (event) => {
        setTerm(event.target.value);
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleOnchange}/>
            </form>           
        </div>
        
    )
}

export default SearchBar;
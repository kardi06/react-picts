import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App() {
    const handleSubmit = (term) =>{
        // console.log('nyobain aja ' + term);
        searchImages(term);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
        
    )
}

export default App;
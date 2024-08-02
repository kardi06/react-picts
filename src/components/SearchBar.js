function SearchBar({onSubmit}) {
    const handleFormSubmit = (event) => {
        event.preventDefult();
        onSubmit('cars');
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input/>
            </form>           
        </div>
        
    )
}

export default SearchBar;
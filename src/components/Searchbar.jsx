function SearchBar(props){

    const {handleSearchChange, setFoodFiltered} = props

    return(
        <div>
            <h1>Search 🔍</h1>
            <input
                type="search"
                placeholder="Search"
                onChange={(event) => {
                    const searchText = event.target.value.toLowerCase()
                    handleSearchChange(searchText)
                    setFoodFiltered(searchText)
                }}
            />
        </div>
    )
}

export default SearchBar
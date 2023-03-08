import { Divider } from "antd"
import { useState } from "react"

function SearchBar({filterDisplay}){

    const [query, setQuery] = useState("")

    return(
        <div className="searchBar">
        <Divider></Divider>
            <label>
                <h1>Search 🔍</h1>
            </label>

            <input
                value={query}
                type="text"
                placeholder="Search"
                onChange={(event) => {
                    setQuery(event.target.value)
                    filterDisplay(event.target.value)                  
                }}
            />
        </div>
    )
}

export default SearchBar
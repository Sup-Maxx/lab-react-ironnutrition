import { useState } from "react"
import foodsJSON from "../foods.json"

import SearchBar from "./Searchbar"
import FoodList from "./FoodList"

function MenuList(){
    const [foods, setFoods] = useState(foodsJSON)
    const [filtered, setFiltered] = useState("")
    return(
        <div>
            <h1>Hello</h1>
            <SearchBar/>
            <FoodList/>
        </div>
    )
}

export default MenuList
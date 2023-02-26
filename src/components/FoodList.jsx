import { useState } from "react"
import foodsJSON from "../foods.json"
import FoodBox from "./FoodBox"
import FormFoodInput from "./FormFoodInput"
import SearchBar from "./Searchbar"

function FoodList(){
    
    const [foodList, setFoodList] = useState(foodsJSON)
    const [foodFiltered, setFoodFiltered] = useState("")

    let filteredFood = foodList.filter((food) => {
        return food.name.toLowerCase().includes(foodFiltered)
    })

    function handleSearchChange(searchText){
        setFoodFiltered(filteredFood)
    }

    function newFood(newFoodItem){
        let freshFoodList = [...foodList, newFoodItem]
        setFoodList(freshFoodList)
    }

    return (
        <div>

            <SearchBar
                handleSearchChange={handleSearchChange}
                setFoodFiltered={filteredFood}
            />

            <FormFoodInput onSubmit={newFood}/>

            <h1>Food list 🥦</h1>

            <div className="menu">

            {foodList.map((foodIndv) => (
                
                <FoodBox key={foodIndv.name}
                    food={{
                        name: foodIndv.name,
                        calories: foodIndv.calories,
                        image: foodIndv.image,
                        servings: foodIndv.servings
}}              />
            ))}
            </div>
        </div>
    )
}

export default FoodList
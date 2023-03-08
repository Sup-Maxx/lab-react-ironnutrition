import { useState } from "react"
import foodsJSON from "../foods.json"
import FoodBox from "./FoodBox"
import FormFoodInput from "./FormFoodInput"
import SearchBar from "./Searchbar"

function FoodList(){
    
    const [foodList, setFoodList] = useState(foodsJSON)
    const [display, setDisplay] = useState(foodsJSON)
    const [showForm, setShowForm] = useState(false)

    function addFood(foodToAdd){
        const newList = [foodToAdd, ...foodList]
        const newDisplay = [foodToAdd, ...display]
        setFoodList(newList)
        setDisplay(newDisplay)
    }

    /* let filteredFood = foodList.filter((food) => {
        return food.name.toLowerCase().includes(foodFiltered)
    })*/

    function filterDisplay(foodName){
        const filteredFoods = foodList.filter((food) => {
            food.name.toLowerCase().includes(foodName.toLowerCase)
        })
        setDisplay(filteredFoods)
    }

    function deleteFood(foodName) {
        const filteredFoods = foodList.filter(food => food.name.toLowerCase() !== foodName.toLowerCase())
        const filterDisplay = foodList.filter(food => food.name.toLowerCase() !== foodName.toLowerCase())
        setFoodList(filteredFoods)
        setDisplay(filterDisplay)
    }


    function newFood(newFoodItem){
        let freshFoodList = [...foodList, newFoodItem]
        setFoodList(freshFoodList)
    }

    return (
        <div>

            <SearchBar filterDisplay={filterDisplay}/>

            <button onClick={() => setShowForm(!showForm)}>
            
            {showForm ? "Hide Form" : "Show Form"}
            
            </button>

            {showForm && <FormFoodInput addFood={addFood}/>}

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
import { useState } from "react"
import foodsJSON from "../foods.json"
import FoodBox from "./FoodBox"


function FoodList(){
    
    const [foodList, setFoodList] = useState(foodsJSON)


    return (
        <div>
            <h3>Food list 🥦</h3>

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
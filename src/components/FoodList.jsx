import { useState } from "react"
import foodsJSON from "../foods.json"


function FoodList(){
    
    const [foodList, setFoodList] = useState(foodsJSON)


    return (
        <div>
            <h3>Food list 🥦</h3>
            {foodList.map((foodIndv) => (
                
                <div>
                    <p>{foodIndv.name}</p>
                    <img src={foodIndv.image} style={{width:"250px"}}/>
                </div>

            ))}
        </div>
    )
}

export default FoodList
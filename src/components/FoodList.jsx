import { useState } from "react"
import foodsJSON from "../foods.json"
import FoodBox from "./FoodBox"


function FoodList(){
    
    const [foodList, setFoodList] = useState(foodsJSON)


    return (
        <div>
            <h3>Food list 🥦</h3>

            <FoodBox food={ {
                name: "Orange",
                calories: 85,
                image: "https://i.imgur.com/abKGOcv.jpg",
                servings: 1
}}          /> 



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
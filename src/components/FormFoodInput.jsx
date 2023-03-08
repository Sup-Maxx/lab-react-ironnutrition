import { Divider } from 'antd';
import { useState } from 'react';

function FormFoodInput({addFood}) {

  const [name, setName] = useState();
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  function handleName(e){
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

    const newFood = { name, image, calories, servings }

    addFood(newFood)

    setName("")
    setImage("")
    setCalories("")
    setServings("")
  }


  return (
      <form onSubmit={handleSubmit}>
        <h3>Want to add a new foodie?</h3>

        <label>Name:
          <input type="text" value={name} onChange={handleName}/>
        </label>

        <label>Image:
          <input type="text" value={image} onChange={(e) => {setImage(e.target.value)}} placeholder="image URL"/>
        </label>

        <label>Calories:
          <input type="text" value={calories} onChange={(e) => {setCalories(e.target.value)}} placeholder="Calories"/>
        </label>

        <label>Servings:
          <input type="text" value={servings} onChange={(e) => {setServings(e.target.value)}} placeholder="Servings"/>
        </label>

        <button type="submit" htmlType="submit">Add New Foodie</button>
      </form>
    
  );
}

export default FormFoodInput;

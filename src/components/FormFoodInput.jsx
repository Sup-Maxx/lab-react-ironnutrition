import { useState } from 'react';

function FormFoodInput(props) {
  const [name, setName] = useState();
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  function nameHandler(event) {
    setName(event.target.value);
  }
  function imageHandler(event) {
    setImage(event.target.value);
  }
  function caloriesHandler(event) {
    setCalories(event.target.value);
  }
  function servingsHandler(event) {
    setServings(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault()

    setName("")
    setImage("")
    setCalories("")
    setServings("")

    props.toSubmit({
        name: name,
        image: image,
        calories: calories,
        servings: servings
    })
  }

  return (
    
      <form onSubmit={submitHandler}>
        <h3>Want to add a new foodie?</h3>

        <label>Name:</label>
        <input type="text" value={name} onChange={nameHandler}/>
        <label>Image:</label>
        <input type="text" value={image} onChange={imageHandler}/>
        <label>Calories:</label>
        <input type="text" value={calories} onChange={caloriesHandler}/>
        <label>Servings:</label>
        <input type="text" value={servings} onChange={servingsHandler}/>

        <button type="submit">Add New Foodie</button>
      </form>
    
  );
}

export default FormFoodInput;

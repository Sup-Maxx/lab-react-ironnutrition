import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import foodsJSON from "./foods.json"


import MenuList from './components/MenuList';
/* import FoodList from './components/FoodList'; */
import SearchBar from './components/Searchbar';
import FoodList from './components/FoodList';

function App() {

  const [foodList, setFoodList] = useState(foodsJSON);
  

  return (
    <div className="App">
      {/* <SearchBar
        handleSearchChange={handleSearchChange}
        setFoodFiltered={filteredFood}
      /> */}
      <FoodList/>

      {/* <h1>Food List 🥦</h1>

      {foodList.map((foodItem) => (
        <div>
          <p>{foodItem.name}</p>
          <img src={foodItem.image} style={{width:"250px"}}  />

        </div>
      ))} */}

    </div>
  );
}

export default App;
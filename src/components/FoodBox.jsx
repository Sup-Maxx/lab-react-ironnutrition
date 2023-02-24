import { Card, Col, Button } from 'antd';

function FoodBox(props){

    const {name, calories, image, servings } = props.food

    return(

    <Col>
      <Card
        title={name}
        style={{ width: 230, margin: 10 }}
      >
        <img src={image} height={100} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
    
    )
}

export default FoodBox

{/* <div>
        <h6>{props.food.name}</h6>
        <h6>{props.food.calories}</h6>
        <img src={props.food.image}/>
        <h6>{props.food.servings}</h6>
        </div> */}

{/* <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories} * {props.food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
</Col> */}


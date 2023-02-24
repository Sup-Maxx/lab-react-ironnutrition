function FoodCard(props){

    const {name, image, calories} = props.foods

    return(
        <div>
            <p>{name}</p>
            <p>{calories}</p>
        </div>
    )
}

export default FoodCard
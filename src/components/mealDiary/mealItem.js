function MealItem(props){
    console.log("Meal item:", props)
    return  (
        <div>
            {props.meal.comida}
        </div>
    )
}

export default MealItem;

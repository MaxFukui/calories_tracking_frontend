function FoodList(props){
    return  (
        <div>
            {props.FoodList.map(
                (food) =>{
                    return <div>
                        {food.comida}
                    </div>
                }
            )}
        </div>
    )
}

export default FoodList;

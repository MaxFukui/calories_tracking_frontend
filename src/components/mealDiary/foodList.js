function FoodList(props){
    return  (
        <div>
            {props.FoodList.map(
                (food) =>{
                    return (
                        <div key={food.id}>
                            {food.comida}
                            {food.calorias}
                            {food.porcao}
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default FoodList;

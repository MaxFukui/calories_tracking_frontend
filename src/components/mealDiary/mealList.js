import MealItem from "./mealItem";

function MealList(props) {
  // console.log("Food List: ", props.FoodList)
  return (
    <div>
      {props.MealList.map((meal) => { return <MealItem key={meal.dia} meal={meal} />})}
    </div>
  );
}

export default MealList;

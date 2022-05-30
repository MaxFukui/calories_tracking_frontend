import { useState } from "react";
import Card from "../layout/Card";
import styles from "./mealItem.module.scss";
import Button from "./button";

function MealItemEdit() {
  function handleSubmit (){

  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <p>Alimento</p>
          <input type="text" />
        </label>
        <label htmlFor="">
          <p>Calorias</p>
          <input type="text" />
        </label>
        <label htmlFor="">
          <p>Horário</p>
          <input type="text" />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}
function MealItem(props) {
  function formatData(data) {
    let dataJs = new Date(data);
    return [dataJs.getHours(), dataJs.getMinutes()];
  }

  const [isToggle, setIsToggle] = useState(false);

  function setState() {
    if (isToggle === false) {
       setIsToggle(true);
    } else {
       setIsToggle(false);
    }
  }

  return (
    <Card>
      <div className={styles.organizerWrapper}>
        <div className={styles.container}>
          <h3>{props.meal.nomeComida}</h3>
          <h3>{props.meal.calorias} cal</h3>
        </div>
        <div className={styles.container}>
          <p style={{ textAlign: "left" }}>{props.meal.porcao}g</p>
          <p>
            {formatData(props.meal.dia)[0]}:{formatData(props.meal.dia)[1]}
          </p>
        </div>
          {isToggle ? <MealItemEdit/>:<div></div>} 
        <span>
          <Button color={"yellow"} type={"toggle"} toggleState={setState}>
            Editar
          </Button>
          <Button color={"red"}>Excluir</Button>
        </span>
      </div>
    </Card>
  );
}

export default MealItem;

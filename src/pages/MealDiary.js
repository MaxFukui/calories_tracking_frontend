import React, { useEffect } from "react";
import MealList from "../components/mealDiary/mealList";
import FoodList from "../components/mealDiary/foodList";
import styles from  './MealDiary.module.scss';
import axios from "axios";
import Loading from "./Loading";


function CompareItemsAndReplace(foodList, mealList){
  foodList.forEach((food)=>{
    mealList.forEach(meal=>{
      if (meal.comida == food.id) {
        meal.nomeComida = food.comida
        meal.calorias = ((food.calorias/food.porcao)*meal.porcao).toFixed(0)
      }
    })
  })
}

class MealDiaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealList: [],
      foodList: [],
      isFetching: false,
    };
  }

  fetchMealAte = () => {
    this.setState({ ...this.state, isFetching: true }); let response = axios
      .get("http://192.168.100.183:8000/DiarioAlimentar/")
      .then((res) => {
        this.setState({mealList:res.data}) // Store data
        // Modify data 
        CompareItemsAndReplace(this.state.foodList, this.state.mealList);
        this.setState({isFetching:false}) // Change fetching status
      })
      .catch((_) => {
        console.log("deu ruim")
        this.setState({...this.state, isFecthing: false})
    });
  };

  fetchMealNoted = () => {
    this.setState({ ...this.state, isFetching: true });
    let response = axios
      .get("http://192.168.100.183:8000/ListaAlimento/")
      .then((res) => {
        this.setState({foodList:res.data})
        this.fetchMealAte() // Fetch mealAte
      })
      .catch((_) => {
        console.log("deu ruim")
        this.setState({...this.state, isFecthing: false})
    });
  };

  componentDidMount() {
    this.fetchMealNoted(); // fetch everything
    this.timer = setInterval(()=> this.fetchMealAte(),60*1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    this.timer = null;
  }

  render() {
    console.log(this.state.mealList)
    if (this.state.isFetching) {
      return (
        <div className="">
          <Loading />
        </div>
      );
    }
    return (
      <div className={styles.bodyWrapper}>
        <h1>Test</h1>
        <MealList MealList={this.state.mealList}/>
        <FoodList FoodList={this.state.foodList}/>
      </div>
    );
  }
}

export default MealDiaryPage;

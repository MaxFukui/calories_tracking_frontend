import React, { useEffect } from "react";
import MealList from "../components/mealDiary/mealList";
import FoodList from "../components/mealDiary/foodList";
import axios from "axios";

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
    this.setState({ ...this.state, isFetching: true });
    let response = axios
      .get("http://192.168.100.183:8000/DiarioAlimentar/")
      .then((res) => {
        this.setState({mealList:res.data, isFetching:false})
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
        this.setState({foodList:res.data, isFetching:false})
      })
      .catch((_) => {
        console.log("deu ruim")
        this.setState({...this.state, isFecthing: false})
    });
  };

  componentDidMount() {
    this.fetchMealAte();
    this.fetchMealNoted();
    this.timer = setInterval(()=> this.fetchMealAte(),60*1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    this.timer = null;
  }

  render() {
    console.log(this.state.mealList);
    if (this.state.isFetching) {
      return (
        <div className="">
          <p>Espera ai mano</p>
        </div>
      );
    }
    return (
      <div>
        <h1>Test</h1>
        <MealList MealList={this.state.mealList}/>
        <FoodList FoodList={this.state.foodList}/>
      </div>
    );
  }
}

export default MealDiaryPage;

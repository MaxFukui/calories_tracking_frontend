import { Route, Routes, useParams } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MealDiaryPage from "./pages/MealDiary";
import React from "react";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Routes>
        <Route path="/" element={<MealDiaryPage  />} />
      </Routes>
    );
  }
}

export default App;

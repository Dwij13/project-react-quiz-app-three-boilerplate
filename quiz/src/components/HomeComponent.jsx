import React, { Component } from "react";
import "./HomeComponent.css";
import { NavLink } from "react-router-dom"

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="parent">

      <div className="home-box">
        <h1>Quiz App</h1>
        <NavLink to={"/quiz"}>

        <button>Play</button>
        </NavLink>
      </div>
      </div>
    );
  }
}

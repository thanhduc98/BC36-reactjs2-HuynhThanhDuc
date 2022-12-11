import React, { Component } from "react";
import data from "../../data/dataGlasses.json";
import Header from "../Header/Header";
import Models from "../Models/Models";
import GlassesList from "../GlassesList/GlassesList";

export default class HomeLayout extends Component {
  state = {
    glassDetail: {
      id: 0,
      price: 0,
      name: "",
      url: "",
      desc: "",
    },
  };
  viewGlassDetail = (glassInfo) => {
    this.setState({
      glassDetail: glassInfo,
    });
  };

  render() {
    return (
      <div
        className="main"
        style={{ backgroundImage: "url('./glassesImage/background.jpg')" }}
      >
        <div className="container">
          <Header />
          <Models glassInfo={this.state.glassDetail} />
          <GlassesList listGlasses={data} viewDetail={this.viewGlassDetail} />
        </div>
      </div>
    );
  }
}

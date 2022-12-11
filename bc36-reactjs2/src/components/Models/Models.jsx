import React, { Component } from "react";

export default class Models extends Component {
  renderContentModel = ({ name, url, desc }) => {
    return (
      <div className="model-info">
        <img className="model-thumbnail" src={url} alt={name} />
        <div className="content-right">
          <h1 className="model-title text-primary">{name}</h1>
          <p className="model-desc text-white">{desc}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ gap: 200 }}
      >
        <div
          className="model-left mt-4"
          style={{ backgroundImage: "url('./glassesImage/model.jpg')" }}
        >
          <div className="model-info">
            <img
              src="./glassesImage/v1.png"
              alt=""
              className="model-thumbnail"
            />
            <div className="content">
              <h1 className="model-title">GUCCI G8850U</h1>
              <p className="model-desc">
                Light pink square lenses define these sunglasses, ending with
                amother of pearl effect tip.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className="model-right"
          mt-4
          style={{ backgroundImage: "url('./glassesImage/model.jpg')" }}
        >
          {this.renderContentModel(this.props.glassInfo)}
        </div>
      </div>
    );
  }
}

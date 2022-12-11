import React, { Component } from "react";

export default class Glasses extends Component {
  render() {
    let { name, url } = this.props.glass;
    return (
      <div className="glasses-item">
        <img
          src={url}
          style={{ width: "100%", padding: "10px", cursor: "pointer" }}
          alt={name}
          onClick={() => {
            document.querySelector(".model-info .content-right").style.display =
              "block";
            this.props.viewDetail(this.props.glass);
          }}
        />
      </div>
    );
  }
}

import React, { Component } from "react";

export default class LifeCycleA extends Component {
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  constructor() {
    super();
    this.state = {
      name: "Sangeetha",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps() {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("LifeCycleA render");
    return <div>LifeCycleA</div>;
  }
}

import React, { Fragment, Component } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import UtilStore from "./stores/UtilStore";

interface IStores {
  utilStore?: UtilStore;
}

export default class App extends Component<IStores> {
  constructor(props: IStores) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Home utilStore={this.props.utilStore} />
      </Fragment>
    );
  }
}

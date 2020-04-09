import React, { PureComponent } from "react";
import { Row, Col, Avatar } from "antd";
import "antd/dist/antd.css";
import "./Home.scss";
import About from "../About/About";
import { observer, inject } from "mobx-react";
import UtilStore, { IComponentVisiblity } from "../../stores/UtilStore";
import Works from "../Works/Works";
import Selections from "../Selections/Selections";
import Experience from "../Experiences/Experiences";
import Technology from "../Technology/Technology";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contacts";

interface IHomeProps {
  utilStore?: UtilStore;
}

interface IHomeState {
  componentVisiblity: IComponentVisiblity[];
}

@inject("utilStore")
@observer
export default class Home extends PureComponent<IHomeProps> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      componentVisiblity: [],
    };
    this.getVisiblity = this.getVisiblity.bind(this);
  }

  componentDidMount() {
    this.setState({ componentVisiblity: this.props.utilStore?.getVisiblity });
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="col" xs={24} sm={24} md={8} lg={8} xl={8}>
            <section className="section-avatar">
              <Avatar size={100} className="avatar"></Avatar>
              <h1 className="avatar-name">User Name</h1>
            </section>
            <hr className="divider" />
            <Selections />
          </Col>
          <Col className="col content" xs={24} sm={24} md={16} lg={16} xl={16}>
            {this.getVisiblity("about") && <About />}
            {this.getVisiblity("works") && <Works />}
            {this.getVisiblity("experiences") && <Experience />}
            {this.getVisiblity("tech") && <Technology />}
            {this.getVisiblity("resume") && <Resume />}
            {this.getVisiblity("contact") && <Contact />}
          </Col>
        </Row>
      </div>
    );
  }

  getVisiblity(component) {
    var index =
      this.props.utilStore?.visiblity.findIndex(
        (x) => x.component === component
      ) || 0;
    return this.props.utilStore?.visiblity[index].visible || false;
  }
}

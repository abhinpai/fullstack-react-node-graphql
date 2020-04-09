import React, { PureComponent } from "react";
import UtilStore, { IComponentVisiblity } from "../../stores/UtilStore";
import { Avatar } from "antd";
import "./Selections.scss";
import { inject, observer } from "mobx-react";

interface IHomeProps {
  utilStore?: UtilStore;
}

interface IHomeState {
  componentVisiblity: IComponentVisiblity[];
}

const componentsList = [
  {
    component: "about",
    componentText: "About Me",
    subText: null,
  },
  {
    component: "works",
    componentText: "My Works",
    subText: "(Projects, Github, etc.)",
  },
  {
    component: "experiences",
    componentText: "Work Experience",
    subText: null,
  },
  {
    component: "tech",
    componentText: "Technology",
    subText: null,
  },
  {
    component: "resume",
    componentText: "My Resume",
    subText: null,
  },
  {
    component: "contact",
    componentText: "Contact Me",
    subText: null,
  },
];

@inject("utilStore")
@observer
export default class Selections extends PureComponent<IHomeProps> {
  constructor(props: IHomeProps) {
    super(props);
    this.updateVisibility = this.updateVisibility.bind(this);
  }

  render() {
    return (
      <div>
        <section className="section-selection">
          <ul>
            {componentsList.map((x) => {
              return this.renderListItem(x.component, x.componentText, x.subText || "");
            })}
            {/* <li onClick={() => this.updateVisibility("about")}>
              <Avatar size={40} shape={"square"}></Avatar>
              <h3 className="selection">About Me</h3>
            </li>
            <li onClick={() => this.updateVisibility("works")}>
              <Avatar size={40} shape={"square"}></Avatar>
              <h3 className="selection">
                My Works
                <span className="span-selection">(Projects, Github, etc.)</span>
              </h3>
            </li>
            <li>
              <Avatar size={40} shape={"square"}></Avatar>
              <h3 className="selection">Work Experience</h3>
            </li>
            <li>
              <Avatar size={40} shape={"square"}></Avatar>
              <h3 className="selection">Technology</h3>
            </li>
            <li>
              <Avatar size={40} shape={"square"}></Avatar>
              <h3 className="selection">My Resume</h3>
            </li>
            <li>
              <Avatar size={40} shape={"square"}></Avatar>
              <h3 className="selection">Contact Me</h3>
            </li> */}
          </ul>
        </section>
      </div>
    );
  }

  renderListItem(commponent: string, slectionText: string, subText?: string) {
    return (
      <li onClick={() => this.updateVisibility(commponent)}>
        <Avatar size={40} shape={"square"}></Avatar>
        <h3 className="selection">
          {slectionText}
          {subText && (
            <span className="span-selection">(Projects, Github, etc.)</span>
          )}
        </h3>
      </li>
    );
  }

  updateVisibility(component: string) {
    var index =
      this.props.utilStore?.visiblity.findIndex(
        (x) => x.component === component
      ) || 0;
    this.props.utilStore?.setVisiblity(index);
  }
}

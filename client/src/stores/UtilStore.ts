import { observable, action, computed } from "mobx";

const defaultComponentVisiblity: IComponentVisiblity[] = [
  {
    component: "about",
    visible: true,
  },
  {
    component: "works",
    visible: false,
  },
  {
    component: "experiences",
    visible: false,
  },
  {
    component: "tech",
    visible: false,
  },
  {
    component: "resume",
    visible: false,
  },
  {
    component: "contact",
    visible: false,
  },
];

export interface IComponentVisiblity {
  component: string;
  visible: boolean;
}

export default class UtilStore {
  @observable visiblity: IComponentVisiblity[] = defaultComponentVisiblity;

  @action setVisiblity(index: number) {
    this.visiblity.map(x => x.visible = false);
    this.visiblity[index].visible = true ;
    
  }

  @computed get getVisiblity() {
    return this.visiblity;

  }
}

import Settings from "./settins";

export default class Init extends Settings {
  constructor() {
    this.name;
    this.list = [];
  }

  init() {
    console.log(this);
  }
}

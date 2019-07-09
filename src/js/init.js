import Settings from "./settings";

export default class Init extends Settings {
  constructor(props) {
    super(props);
    this.list = [];
  }

  init() {
    console.log(this);
  }
}

import Settings from "./settings";

export default class Init {
  constructor() {
    this.name;
    this.list = [];
  }

  init() {
    console.log(this);

    let settings = new Settings();
    console.log(settings.init());
  }
}

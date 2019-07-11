import Settings from "./settings";
import $ from "jquery";

export default class Init extends Settings {
  constructor(props) {
    super(props);
    this.list = [];
  }

  init() {
    $(function() {
      console.log($(document));
    });
  }
}

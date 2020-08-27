import Blogpost from "./Models/Blogpost.js";

let _state = {
  /** @type {Blogpost[]} */
  blogposts: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;

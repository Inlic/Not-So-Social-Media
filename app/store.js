import Blogpost from "./Models/Blogpost.js";

let _state = {
  /** @type {Blogpost[]} */
  blogposts: [new Blogpost({ title: "i love pie", post: " Pie is the greatest thing to have ever existed. Suck it cake lovers!!!" })]
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

import Blogpost from "./Models/Blogpost.js";

let _state = {
  /** @type {Blogpost[]} */
  // @ts-ignore
  blogposts: [new Blogpost({ title: "i love pie", post: " Pie is the greatest thing to have ever existed. Suck it cake lovers!!!" })]
};

function _loadState() {
  let data = JSON.parse(localStorage.getItem("blogposts"))
  if (data) {
    data.blogposts = data.blogposts.map(p => new Blogpost(p))
    _state = data
  }
}

_loadState()
class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  saveState() {
    localStorage.setItem("blogposts", JSON.stringify(_state))
  }
}

const STORE = new Store();
export default STORE;

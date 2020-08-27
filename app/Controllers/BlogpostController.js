import BlogpostService from "../Services/BlogpostService.js";
import STORE from "../store.js"

//Private
function _drawBlogposts() {
  let template = ''
  STORE.State.blogposts.forEach(p => template += p.Template)
  document.getElementById('posts').innerHTML = template
}










//Public
export default class BlogpostController {
  constructor() {
    console.log("Controller Check");
    _drawBlogposts();
  }
}

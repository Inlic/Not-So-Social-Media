import Blogpost from "../Models/Blogpost.js";
import STORE from "../store.js";


console.log("Service Check");
//Public
class BlogpostService {
  addComment(newComment, id) {

    let post = STORE.State.blogposts.find(p => p.id == id)
    post.comments.push(newComment)

  }


  removeComment(id, comment) {
    let post = STORE.State.blogposts.find(p => p.id == id)
    let commentIndex = post.comments.findIndex(c => c == comment)
    post.comments.splice(commentIndex, 1)
  }

}

const SERVICE = new BlogpostService();
export default SERVICE;

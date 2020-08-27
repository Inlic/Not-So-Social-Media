import { generateId } from "../Utils.js"



export default class Blogpost {
    constructor({ title, post, id, comments }) {
        this.title = title
        this.post = post
        this.id = id || generateId()
        this.comments = comments || ['great post', 'Makes Sense', 'Thanks for agreeing with me']
    }

    get Template() {

        return /*html*/ `<div class="card ">
        <div class="card-body d-flex flex-column">
            <i class="fa fa-trash align-self-end" aria-hidden="true"></i>
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.post}</p>
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio fa <i class="fa fa-trash"
                        aria-hidden="true"></i></li>
                <li class="list-group-item">Dapibus ac facilisis in<i class="fa fa-trash"
                        aria-hidden="true"></i></li>
                <li class="list-group-item">Morbi leo risus<i class="fa fa-trash" aria-hidden="true"></i>
                </li>
                <li class="list-group-item">Porta ac consectetur ac<i class="fa fa-trash"
                        aria-hidden="true"></i></li>
                <li class="list-group-item">Vestibulum at eros<i class="fa fa-trash" aria-hidden="true"></i>
                </li>
            </ul>
            <form>
                <div class="form-group mt-4">
                    <label for="exampleFormControlInput1">Leave a Comment</label>
                    <input type="text" class="form-control" id="comment" placeholder="Comment...">
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-outline-success">Post</button>
                </div>
            </form>
        </div>
    </div>
`
    }

    get CommentsTemplate() {
        let template = ''
        this.comments.forEach(c => {
            template += `                <li class="list-group-item">${c} <i class="fa fa-trash"
        aria-hidden="true" onclick="app.blogpostController.removeComment('${this.id}', '${c}')"></i></li>
        `
        });
        return template
    }

}
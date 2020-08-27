export default class Blogpost {
    constructor({ title, post }) {
        this.title = title
        this.post = post
    }

    get Template() {

        return /*html*/ `<div class="card ">
        <div class="card-body d-flex flex-column">
            <i class="fa fa-trash align-self-end" aria-hidden="true"></i>
            <h5 class="card-title">Actual Blog Post</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
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
}
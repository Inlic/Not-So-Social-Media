export default class Blogpost {
    constructor({ title, post }) {
        this.title = title
        this.post = post
    }

    get Template() {
        return this.title
    }
}
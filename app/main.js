import BlogpostController from "./Controllers/BlogpostController.js";

class App {
  blogpostController = new BlogpostController();
}

window["app"] = new App();

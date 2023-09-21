import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import { auth } from "../middleware/AuthMiddleware";
import ImageController from "../controller/ImageController";

class ImageRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.get("/", auth, ImageController.getImages);
    this.router.post("/", auth, ImageController.postImage);
    this.router.delete("/:id", auth, ImageController.deleteImage);
  }
}

export default new ImageRoutes().router;

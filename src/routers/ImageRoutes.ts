import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import { auth } from "../middleware/AuthMiddleware";
import ImageController from "../controller/ImageController";
import { corsValidate } from "../middleware/MemberAuthValidator";

class ImageRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.get("/", corsValidate, auth, ImageController.getImages);
    this.router.post("/", corsValidate, auth, ImageController.postImage);
    this.router.delete("/:id", corsValidate, auth, ImageController.deleteImage);
  }
}

export default new ImageRoutes().router;

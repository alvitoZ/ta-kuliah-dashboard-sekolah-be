import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import MateriController from "../controller/MateriController";
import { auth } from "../middleware/AuthMiddleware";

class BlogRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.get("/", MateriController.getMateri);
    this.router.post("/", auth, MateriController.create);
  }
}

export default new BlogRoutes().router;

import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import MateriController from "../controller/MateriController";
import { auth } from "../middleware/AuthMiddleware";
import { corsValidate } from "../middleware/MemberAuthValidator";
class BlogRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.get("/", corsValidate, MateriController.getMateri);
    this.router.get("/:id", corsValidate, auth, MateriController.showMateri);
    this.router.post("/", corsValidate, auth, MateriController.create);
    this.router.put("/:id", corsValidate, auth, MateriController.update);
    this.router.delete("/:id", corsValidate, auth, MateriController.delete);
  }
}

export default new BlogRoutes().router;

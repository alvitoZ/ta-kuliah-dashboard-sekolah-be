import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import AuthController from "../controller/AuthController";
import validate from "../middleware/AuthValidator";
import { auth } from "../middleware/AuthMiddleware";
import { corsValidate } from "../middleware/MemberAuthValidator";

class AuthRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("/user/:role", corsValidate, auth, AuthController.getUser);
    this.router.get("/user-role", corsValidate, auth, AuthController.showUser);
    this.router.get(
      "/user-id/:id",
      corsValidate,
      auth,
      AuthController.getUserById
    );
    this.router.post(
      "/register",
      corsValidate,
      validate,
      AuthController.registers
    );
    this.router.post("/login", corsValidate, AuthController.login);
    this.router.put(
      "/update-email/:id",
      corsValidate,
      auth,
      AuthController.updateEmail
    );
    this.router.put(
      "/edit-profil/:id",
      corsValidate,
      validate,
      auth,
      AuthController.editProfil
    );
    this.router.put(
      "/edit-user/:id",
      corsValidate,
      validate,
      auth,
      AuthController.editUser
    );
  }
}

export default new AuthRoutes().router;

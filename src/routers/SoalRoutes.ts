import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import SoalController from "../controller/SoalController";
import { auth } from "../middleware/AuthMiddleware";
import { memberAuth } from "../middleware/MemberAuthValidator";

class SoalRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.get("/list-soal/:category", auth, SoalController.index);
    this.router.get("/nilai-siswa", auth, SoalController.showNilai);
    this.router.get("/nilai", auth, SoalController.getNilai);
    this.router.get("/coba", SoalController.coba);
    this.router.post("/post-jawaban", auth, SoalController.postJawaban);
    this.router.post("/post-soal/:category", auth, SoalController.create);
  }
}

export default new SoalRoutes().router;

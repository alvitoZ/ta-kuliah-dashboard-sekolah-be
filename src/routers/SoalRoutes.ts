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
    this.router.post("/post-jawaban", auth, SoalController.postJawaban);
    //nilai
    this.router.get("/nilai-siswa", auth, SoalController.showNilai);
    this.router.get("/nilai", auth, SoalController.getNilai);
    this.router.get("/nilai/:id", auth, SoalController.showNilaiById);
    this.router.get("/nilai-grafik", SoalController.getNilaiForGrafik);
    this.router.put("/edit-nilai/:id", auth, SoalController.editNilai);
    this.router.delete("/nilai/:id", auth, SoalController.deleteNilaiById);
    //end nilai

    //soal
    this.router.get("/list-soal/:category", auth, SoalController.index);
    this.router.post("/post-soal/:category", auth, SoalController.createSoal);
    this.router.put(
      "/update-soal/:category/:id",
      auth,
      SoalController.updateSoal
    );
    this.router.delete(
      "/delete-soal/:category/:id",
      auth,
      SoalController.deleteSoal
    );
    //end oal
  }
}

export default new SoalRoutes().router;

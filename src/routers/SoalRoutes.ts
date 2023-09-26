import { Router, Response, Request } from "express";
import IRouter from "./RouterInterface";
import SoalController from "../controller/SoalController";
import { auth } from "../middleware/AuthMiddleware";
import { corsValidate } from "../middleware/MemberAuthValidator";

class SoalRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    this.router.post("/post-jawaban", auth, SoalController.postJawaban);
    //nilai
    this.router.get(
      "/nilai-siswa",
      corsValidate,
      auth,
      SoalController.showNilai
    );
    this.router.get("/nilai", corsValidate, auth, SoalController.getNilai);
    this.router.get(
      "/nilai/:id",
      corsValidate,
      auth,
      SoalController.showNilaiById
    );
    this.router.get(
      "/nilai-grafik",
      corsValidate,
      SoalController.getNilaiForGrafik
    );
    this.router.put(
      "/edit-nilai/:id",
      corsValidate,
      auth,
      SoalController.editNilai
    );
    this.router.delete(
      "/nilai/:id",
      corsValidate,
      auth,
      SoalController.deleteNilaiById
    );
    //end nilai

    //soal
    this.router.get(
      "/list-soal/:category",
      corsValidate,
      auth,
      SoalController.index
    );
    this.router.post(
      "/post-soal/:category",
      corsValidate,
      auth,
      SoalController.createSoal
    );
    this.router.put(
      "/update-soal/:category/:id",
      corsValidate,
      auth,
      SoalController.updateSoal
    );
    this.router.delete(
      "/delete-soal/:category/:id",
      corsValidate,
      auth,
      SoalController.deleteSoal
    );
    //end oal
  }
}

export default new SoalRoutes().router;

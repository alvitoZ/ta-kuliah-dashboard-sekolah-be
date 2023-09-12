import { Request, Response, NextFunction } from "express";
import { MateriModel } from "../models/MateriModel";

class MateriController {
  async create(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    const { title, body } = req.body;

    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access",
      });
    }

    const postingan = await MateriModel.insertMany({
      title: title,
      body: body,
    });

    return res.status(200).json({
      msg: "create materi berhasil",
      data: postingan,
    });
  }

  async getMateri(req: Request, res: Response): Promise<any> {
    const materi = await MateriModel.find();
    return res.status(200).json({
      data: materi,
    });
  }
}

export default new MateriController();

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

  async update(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    const { title, body } = req.body;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access",
      });
    }

    const check = await MateriModel.findOne({
      _id: req.params.id,
    });

    if (!check) {
      return res.status(404).json({
        msg: "cannot find id",
        title: "",
        body: "",
      });
    }

    const postingan = await MateriModel.updateMany(
      { _id: req.params.id },
      {
        $set: {
          title: title,
          body: body,
        },
      }
    );

    return res.status(200).json({
      msg: "update materi berhasil",
      data: postingan,
    });
  }

  async showMateri(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access",
      });
    }

    const postingan = await MateriModel.findOne({
      _id: req.params.id,
    });

    if (!postingan) {
      return res.status(404).json({
        msg: "cannot find id",
        title: "",
        body: "",
      });
    }
    return res.status(200).json({
      data: postingan,
    });
  }

  async delete(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access",
      });
    }

    const check = await MateriModel.findOne({
      _id: req.params.id,
    });

    if (!check) {
      return res.status(404).json({
        msg: "cannot find id",
      });
    }

    const postingan = await MateriModel.findOneAndDelete({
      _id: req.params.id,
    });

    return res.status(200).json({
      msg: "delete materi berhasil",
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

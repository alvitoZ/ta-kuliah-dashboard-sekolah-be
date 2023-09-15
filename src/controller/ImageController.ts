import { Request, Response, NextFunction } from "express";
import RemoveImage from "../utils/RemoveImage";
import { ImageModel } from "../models/ImageModel";

class ImageController {
  async getImages(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access getImages",
      });
    }
    const result = await ImageModel.find();
    return res.status(200).json({
      data: result,
    });
  }

  async getOnlyImages(req: Request, res: Response): Promise<any> {
    const images = [];
    const result = await ImageModel.find();
    for (let data of result) {
      images.push(`${process.env.ORIGIN_IMAGES}/${data.image}`);
    }
    return res.status(200).json({
      data: images,
    });
  }

  async postImage(req: Request, res: Response): Promise<any> {
    const { fullname, role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access postGambar",
      });
    }

    let { alt } = req.body;
    const image: string = req.file?.filename || "default";

    const gambar = await ImageModel.insertMany({
      image: image,
      alt: alt,
    });

    return res.status(200).json({
      msg: "create materi berhasil",
      data: gambar,
    });
  }

  async deleteImage(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access deleteImage",
      });
    }
    const result = await ImageModel.findByIdAndDelete({ _id: req.params.id });
    RemoveImage(result?.image);
    return res.status(200).json({
      data: result,
    });
  }
}

export default new ImageController();

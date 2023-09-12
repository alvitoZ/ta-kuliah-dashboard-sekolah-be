import { Request, Response, NextFunction } from "express";
import HashFunction from "../utils/HashFunction";
import { UserModel } from "../models/UserModel";
import RemoveImage from "../utils/RemoveImage";

class AuthController {
  registers = async (req: Request, res: Response): Promise<Response> => {
    let { fullname, password, email, gender, role } = req.body;
    const fullName: any = await UserModel.findOne({ fullname: fullname });

    //  checkUser
    if (fullName) {
      return res.status(400).json({
        msg: "user failed/nama udah ada yg make",
      });
    }
    // const hashed: string = await HashFunction.hash(password);
    const user = await UserModel.insertMany({
      fullname: fullname,
      password: password,
      email: email,
      gender: gender,
      role: role,
    });

    return res.status(200).json({
      msg: `register sebagai ${role} berhasil`,
      data: user,
    });
  };

  async login(req: Request, res: Response): Promise<any> {
    //cari data user by username
    let { fullname, password } = req.body;
    const user: any = await UserModel.findOne({
      fullname: fullname,
    });

    //  checkUser
    if (!user) {
      return res.status(400).json({ msg: "user failed" });
    }

    //check password
    let compare: boolean = password === user.password;

    // generate token
    if (compare) {
      let token = HashFunction.generate(
        user.fullname,
        user.gender,
        user.password,
        user.email,
        user.role
      );
      return res.status(200).json({
        msg: `login sebagai ${user.role} berhasil`,
        role: user.role,
        token: token,
      });
    } else {
      return res.status(400).json({ msg: "auth failed" });
    }
  }

  async getUser(req: Request, res: Response): Promise<any> {
    let { role } = res.locals.user;
    if (role === "siswa" || role === "guru") {
      return res.status(403).json({
        msg: "siswa cannot access getUser",
      });
    }
    const user: any = await UserModel.find({ role: req.params.role });
    return res.status(200).json({
      data: user,
    });
  }

  async showUser(req: Request, res: Response): Promise<any> {
    const { fullname, role } = res.locals.user;
    const user: any = await UserModel.findOne({
      fullname: fullname,
    });

    return res.status(200).json({
      data: user,
    });
  }

  updateEmail = async (req: Request, res: Response): Promise<Response> => {
    let { email } = req.body;

    const user = await UserModel.updateMany(
      { _id: req.params.id },
      {
        $set: {
          email: email,
        },
      }
    );

    return res.status(200).json({
      data: user,
    });
  };

  editProfil = async (req: Request, res: Response): Promise<Response> => {
    let { email, fullname, password } = req.body;
    const image: string = req.file?.filename || "default";

    const deleteImage = await UserModel.findOne({ _id: req.params.id });
    RemoveImage(deleteImage?.image);

    const user = await UserModel.updateMany(
      { _id: req.params.id },
      {
        $set: {
          password: password,
          fullname: fullname,
          image: image,
          email: email,
        },
      }
    );

    return res.status(200).json({
      data: user,
    });
  };
}
export default new AuthController();

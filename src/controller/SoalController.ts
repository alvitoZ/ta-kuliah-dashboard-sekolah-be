import { Request, Response, NextFunction } from "express";
import RemoveImage from "../utils/RemoveImage";
import { SoalModel } from "../models/SoalModel";
import { NilaiModel } from "../models/NilaiModel";
import { TotalJawabanBenar } from "../utils/TotalJawabanBenar";

interface Jawaban {
  soal: string;
  status: boolean;
}

type Kategori = {
  nomor: number;
  kategori: string;
  soal: string;
  jawaban: Jawaban[];
};

type Soal = Kategori[];

class SoalController {
  async create(req: Request, res: Response): Promise<any> {
    const input: Soal = req.body;
    const Data: Kategori[] = [];
    for (let entry of input) {
      let jawabans: Jawaban[] = [];
      for (let jawaban of entry.jawaban) {
        jawabans.push({
          soal: jawaban.soal,
          status: jawaban.status,
        });
      }

      let soals = {
        nomor: entry.nomor,
        kategori: req.params.category,
        soal: entry.soal,
        jawaban: jawabans,
      };

      Data.push(soals);
    }

    switch (req.params.category) {
      case "c1":
        {
          const result = await SoalModel.updateMany({
            c1: Data,
          });
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c2":
        {
          const result = await SoalModel.updateMany({
            c2: Data,
          });
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c3":
        {
          const result = await SoalModel.updateMany({
            c3: Data,
          });
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c4":
        {
          const result = await SoalModel.updateMany({
            c4: Data,
          });
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c5":
        {
          const result = await SoalModel.updateMany({
            c5: Data,
          });
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c6":
        {
          const result = await SoalModel.updateMany({
            c6: Data,
          });
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      default:
        res.status(404).json({
          msg: "wrong kategori",
        });
        break;
    }
  }

  async postJawaban(req: Request, res: Response): Promise<any> {
    const { fullname, role } = res.locals.user;
    if (role === "guru") {
      return res.status(403).json({
        msg: "guru cannot access postJawaban",
      });
    }

    const input: Soal = req.body;
    const Data: any[] = [];
    for (let entry of input) {
      Data.push(entry);
    }

    if (input.length < 1) {
      return res.status(200).json({
        msg: "data tidak valid",
      });
    } else {
      const data = TotalJawabanBenar(Data);
      const result = await NilaiModel.insertMany({
        nama: fullname,
        nilai: (10 / data.benar.length + data.salah.length) * data.benar.length,
        kategori: input[0].kategori,
      });
      return res.status(200).json({
        total_benar: data.benar.length,
        total_salah: data.salah.length,
        nilai: (10 / data.benar.length + data.salah.length) * data.benar.length,
        kategori: input[0].kategori,
        data: result,
      });
    }
  }

  async getNilai(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access getUser",
      });
    }
    const result = await NilaiModel.find();
    return res.status(200).json({
      data: result,
    });
  }

  async getNilaiForGrafik(req: Request, res: Response): Promise<any> {
    const result = await NilaiModel.find();
    // result.reverse();
    return res.status(200).json({
      data: result.reverse().slice(0, 6),
    });
  }

  async showNilai(req: Request, res: Response): Promise<any> {
    const { fullname, role } = res.locals.user;
    const result = await NilaiModel.find({ nama: fullname });
    return res.status(200).json({
      data: result,
    });
  }

  async showNilaiById(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access showNilaiById",
      });
    }
    const result = await NilaiModel.findOne({ _id: req.params.id });
    return res.status(200).json({
      data: result,
    });
  }

  async deleteNilaiById(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access deleteNilaiById",
      });
    }
    const result = await NilaiModel.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json({
      data: result,
    });
  }

  async coba(req: Request, res: Response): Promise<any> {
    const soal: any = await SoalModel.find();
    return res.status(200).json({
      data: soal[0].c1,
    });
  }

  async index(req: Request, res: Response): Promise<any> {
    // const { username, id } = res.locals.user;
    const soal = await SoalModel.find();
    switch (req.params.category) {
      case "c1":
        res.status(200).json({
          data: soal[0].c1,
        });
        break;
      case "c2":
        res.status(200).json({
          data: soal[0].c2,
        });
        break;
      case "c3":
        res.status(200).json({
          data: soal[0].c3,
        });
        break;
      case "c4":
        res.status(200).json({
          data: soal[0].c4,
        });
        break;
      case "c5":
        res.status(200).json({
          data: soal[0].c5,
        });
        break;
      case "c6":
        res.status(200).json({
          data: soal[0].c6,
        });
        break;
      default:
        res.status(404).json({
          msg: "wrong kategori",
        });
        break;
    }
  }

  editNilai = async (req: Request, res: Response): Promise<Response> => {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access editNilai",
      });
    }

    const check = NilaiModel.findOne({ _id: req.params.id });

    if (!check) {
      return res.status(404).json({
        msg: "gagal id tidak ditemukan",
        data: check,
      });
    }
    let { nama, nilai, kategori } = req.body;
    const nilaiUser = await NilaiModel.updateMany(
      { _id: req.params.id },
      {
        $set: {
          nama: nama,
          nilai: nilai,
          kategori: kategori,
        },
      }
    );

    return res.status(200).json({
      data: nilaiUser,
      msg: `nilai siswa dengan id:${req.params.id} berhasil di edit`,
    });
  };
}

export default new SoalController();

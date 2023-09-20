import { Request, Response, NextFunction } from "express";
import { NilaiModel } from "../models/NilaiModel";
import { TotalJawabanBenar } from "../utils/TotalJawabanBenar";
import { C1Model } from "../models/C1Model";
import { C2Model } from "../models/C2Model";
import { C3Model } from "../models/C3Model";
import { C4Model } from "../models/C4Model";
import { C5Model } from "../models/C5Model";
import { C6Model } from "../models/C6Model";

interface Jawaban {
  soal: string;
  status: boolean;
}

type Kategori = {
  kategori: string;
  soal: string;
  jawaban: Jawaban[];
};

type Soal = Kategori[];

class SoalController {
  async createSoal(req: Request, res: Response): Promise<any> {
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
        kategori: req.params.category,
        soal: entry.soal,
        jawaban: jawabans,
      };

      Data.push(soals);
    }

    switch (req.params.category) {
      case "c1":
        {
          const result = await C1Model.insertMany(Data);
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c2":
        {
          const result = await C2Model.insertMany(Data);
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c3":
        {
          const result = await C3Model.insertMany(Data);
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c4":
        {
          const result = await C4Model.insertMany(Data);
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c5":
        {
          const result = await C5Model.insertMany(Data);
          res.status(200).json({
            msg: `create soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c6":
        {
          const result = await C6Model.insertMany(Data);
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

  async updateSoal(req: Request, res: Response): Promise<any> {
    const { soal } = req.body;

    switch (req.params.category) {
      case "c1":
        {
          const result = await C1Model.updateMany(
            { _id: req.params.id },
            {
              $set: {
                soal: soal,
              },
            }
          );
          res.status(200).json({
            msg: `update soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c2":
        {
          const result = await C2Model.updateMany(
            { _id: req.params.id },
            {
              $set: {
                soal: soal,
              },
            }
          );
          res.status(200).json({
            msg: `update soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c3":
        {
          const result = await C3Model.updateMany(
            { _id: req.params.id },
            {
              $set: {
                soal: soal,
              },
            }
          );
          res.status(200).json({
            msg: `update soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c4":
        {
          const result = await C4Model.updateMany(
            { _id: req.params.id },
            {
              $set: {
                soal: soal,
              },
            }
          );
          res.status(200).json({
            msg: `update soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c5":
        {
          const result = await C5Model.updateMany(
            { _id: req.params.id },
            {
              $set: {
                soal: soal,
              },
            }
          );
          res.status(200).json({
            msg: `update soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c6":
        {
          const result = await C6Model.updateMany(
            { _id: req.params.id },
            {
              $set: {
                soal: soal,
              },
            }
          );
          res.status(200).json({
            msg: `update soal ${req.params.category} berhasil`,
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

  async deleteSoal(req: Request, res: Response): Promise<any> {
    switch (req.params.category) {
      case "c1":
        {
          const result = await C1Model.findOneAndDelete({ _id: req.query.id });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c2":
        {
          const result = await C2Model.findOneAndDelete({ _id: req.params.id });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c3":
        {
          const result = await C3Model.findOneAndDelete({ _id: req.params.id });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c4":
        {
          const result = await C4Model.findOneAndDelete({ _id: req.params.id });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c5":
        {
          const result = await C5Model.findOneAndDelete({ _id: req.params.id });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c6":
        {
          const result = await C6Model.findOneAndDelete({ _id: req.params.id });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
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
      await NilaiModel.insertMany({
        nama: fullname,
        nilai: (10 / data.benar.length + data.salah.length) * data.benar.length,
        kategori: input[0].kategori,
      });
      return res.status(200).json({
        total_benar: data.benar.length,
        total_salah: data.salah.length,
        nilai: (10 / data.benar.length + data.salah.length) * data.benar.length,
        kategori: input[0].kategori,
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

  async index(req: Request, res: Response): Promise<any> {
    // const { username, id } = res.locals.user;
    switch (req.params.category) {
      case "c1":
        {
          const soal = await C1Model.find();
          res.status(200).json({
            data: soal,
          });
        }
        break;
      case "c2":
        {
          const soal = await C2Model.find();
          res.status(200).json({
            data: soal,
          });
        }
        break;
      case "c3":
        {
          const soal = await C3Model.find();
          res.status(200).json({
            data: soal,
          });
        }
        break;
      case "c4":
        {
          const soal = await C4Model.find();
          res.status(200).json({
            data: soal,
          });
        }
        break;
      case "c5":
        {
          const soal = await C5Model.find();
          res.status(200).json({
            data: soal,
          });
        }
        break;
      case "c6":
        {
          const soal = await C6Model.find();
          res.status(200).json({
            data: soal,
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

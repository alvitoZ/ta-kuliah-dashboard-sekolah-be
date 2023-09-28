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

    try {
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
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async updateSoal(req: Request, res: Response): Promise<any> {
    const { soal } = req.body;
    try {
      switch (req.params.category) {
        case "c1":
          {
            const check = await C1Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
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
            const check = await C2Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
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
            const check = await C3Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
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
            const check = await C4Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
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
            const check = await C5Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
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
            const check = await C6Model.findOne({
              _id: req.params.id,
            });
            if (!check) {
              return res.status(404).json({
                msg: `soal not found`,
              });
            }
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
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async deleteSoal(req: Request, res: Response): Promise<any> {
    // const result = await C1Model.findByIdAndDelete({
    //   _id: req.params.id,
    // });
    // res.status(200).json({
    //   msg: `delete soal ${req.params.category} berhasil`,
    //   data: result,
    // });
    switch (req.params.category) {
      case "c1":
        {
          const check = await C1Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C1Model.findByIdAndDelete({
            _id: req.params.id,
          });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c2":
        {
          const check = await C2Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C2Model.findByIdAndDelete({
            _id: req.params.id,
          });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c3":
        {
          const check = await C3Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C3Model.findByIdAndDelete({
            _id: req.params.id,
          });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c4":
        {
          const check = await C4Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C4Model.findByIdAndDelete({
            _id: req.params.id,
          });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c5":
        {
          const check = await C5Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C5Model.findByIdAndDelete({
            _id: req.params.id,
          });
          res.status(200).json({
            msg: `delete soal ${req.params.category} berhasil`,
            data: result,
          });
        }
        break;
      case "c6":
        {
          const check = await C6Model.findOne({
            _id: req.params.id,
          });
          if (!check) {
            return res.status(404).json({
              msg: `soal not found`,
            });
          }
          const result = await C6Model.findByIdAndDelete({
            _id: req.params.id,
          });
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

    try {
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
        const nilai =
          (10 / (data.benar.length + data.salah.length)) * data.benar.length;
        await NilaiModel.insertMany({
          nama: fullname,
          nilai: Number(nilai.toFixed(2)),
          kategori: input[0].kategori,
        });
        return res.status(200).json({
          total_benar: data.benar.length,
          total_salah: data.salah.length,
          nilai: Number(nilai.toFixed(2)),
        });
      }
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async getNilai(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access getUser",
        });
      }
      const result = await NilaiModel.find();
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async getNilaiForGrafik(req: Request, res: Response): Promise<any> {
    try {
      const result = await NilaiModel.find();
      // result.reverse();
      return res.status(200).json({
        data: result.reverse().slice(0, 6),
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async showNilai(req: Request, res: Response): Promise<any> {
    const { fullname, role } = res.locals.user;

    try {
      const result = await NilaiModel.find({ nama: fullname });
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async showNilaiById(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    try {
      if (role === "siswa") {
        return res.status(403).json({
          msg: "siswa cannot access showNilaiById",
        });
      }
      const result = await NilaiModel.findOne({ _id: req.params.id });
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async deleteNilaiById(req: Request, res: Response): Promise<any> {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access deleteNilaiById",
      });
    }
    try {
      const result = await NilaiModel.findByIdAndDelete({ _id: req.params.id });
      return res.status(200).json({
        data: result,
      });
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  async index(req: Request, res: Response): Promise<any> {
    // const { username, id } = res.locals.user;
    try {
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
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  }

  editNilai = async (req: Request, res: Response): Promise<Response> => {
    const { role } = res.locals.user;
    if (role === "siswa") {
      return res.status(403).json({
        msg: "siswa cannot access editNilai",
      });
    }

    try {
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
    } catch (error) {
      return res.status(503).json({
        msg: `error`,
        data: [],
      });
    }
  };
}

export default new SoalController();

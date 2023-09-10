import mongoose, { Document, Schema, model } from "mongoose";

const jawabanSchema = new Schema({
  soal: String,
  status: Boolean,
});
const soalsSchema = new Schema({
  nomor: Number,
  soal: String,
  kategori: String,
  jawaban: [jawabanSchema],
});
const soalSchema: Schema = new Schema(
  {
    c1: [soalsSchema],
    c2: [soalsSchema],
    c3: [soalsSchema],
    c4: [soalsSchema],
    c5: [soalsSchema],
    c6: [soalsSchema],
  },
  {
    timestamps: true,
  }
);

export const SoalModel = mongoose.model("soal", soalSchema);

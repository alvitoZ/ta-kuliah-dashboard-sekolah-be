import mongoose, { Document, Schema, model } from "mongoose";

const nilaiSchema: Schema = new Schema(
  {
    nama: String,
    nilai: Number,
    kategori: String,
  },
  {
    timestamps: true,
  }
);

export const NilaiModel = mongoose.model("nilai", nilaiSchema);

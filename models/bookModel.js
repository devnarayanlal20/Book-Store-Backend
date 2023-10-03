import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    about: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("books", bookSchema);

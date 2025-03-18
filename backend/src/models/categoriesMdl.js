import { Schema, model } from "mongoose";
 
const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: [true, "El nombre de la categoría es obligatorio"],
      minlength: [3, "El nombre de la categoría debe tener al menos 3 caracteres"],
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);
 
export default model("Categories", categorySchema);
 
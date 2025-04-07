import { Schema, model } from "mongoose";
 
const techniqueSchema = new Schema(
  {
    techniqueName: {
      type: String,
      required: [true, "El nombre de la técnica es obligatorio"],
      minlength: [3, "El nombre de la técnica debe tener al menos 3 caracteres"],
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);
 
export default model("Techniques", techniqueSchema);
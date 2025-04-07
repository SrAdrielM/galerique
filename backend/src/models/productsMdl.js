import { Schema, model } from "mongoose";
 
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El título es obligatorio"],
      minlength: [3, "El título debe tener al menos 3 caracteres"],
    },
    description: {
      type: String,
      required: [true, "La descripción es obligatoria"],
      minlength: [10, "La descripción debe tener al menos 10 caracteres"],
    },
    price: {
      type: Number,
      required: [true, "El precio es obligatorio"],
      min: [0, "El precio no puede ser negativo"],
    },
    size: {
      type: String,
      required: [true, "El tamaño es obligatorio"],
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: "Users", 
      required: [true, "El ID del vendedor es obligatorio"],
    },
    techniqueId: {
      type: Schema.Types.ObjectId,
      ref: "Techniques", 
      required: [true, "El ID de la técnica es obligatorio"],
    },
    categoriesId: {
      type: Schema.Types.ObjectId,
      ref: "Categories", 
      required: [true, "El ID de la categoría es obligatorio"],
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);
 
export default model("Products", productSchema);
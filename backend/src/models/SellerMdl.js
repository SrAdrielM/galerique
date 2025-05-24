import {Schema, model} from "mongoose";

const sellerSchema = new Schema({
    fullName: {
        type: String,
        require: true,
    },
    userName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    idProduct: {
        type: Schema.Types.ObjectId,
        require: true,
    }
}, {
    timestamps: true,
    strict: false
})

export default model("seller", sellerSchema);
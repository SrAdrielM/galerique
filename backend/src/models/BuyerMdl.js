import {Schema, model} from "mongoose";

const buyerSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    accountDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("buyer", buyerSchema);
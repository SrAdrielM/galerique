import {Schema, model} from "mongoose";

const buyerSchema = new Schema({
    fullName: {
        type: String,
        require: true,
    },
    profilePic: {
        type: String,
        require: true
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
    accountDate: {
        type: Date,
        require: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("buyer", buyerSchema);
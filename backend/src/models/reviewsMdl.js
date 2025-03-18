/*
    comment
    rating
    idProduct
    idBuyer
*/

import {Schema, model} from "mongoose";

const reviewSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    idProduct: {
        type: Schema.Types.ObjectId,
        ref: "products",
        require: true,
    },
    idBuyer: {
        type: Schema.Types.ObjectId,
        ref: "buyers",
        require: true,
    }
}, {
    timestamps: true,
    strict: false
})

export default model("reviews", reviewSchema);
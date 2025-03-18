/*
    products
        idProducts
    idBuyer
    total
*/

import {Schema, model} from "mongoose";

const ordersSchema = new Schema({
    products: [{
        idProducts: {
            type: Schema.Types.ObjectId,
            ref: "products"
        },
    }],
    idBuyer: {
        type: Schema.Types.ObjectId,
        ref: "buyers",
        require: true,
    },
    total: {
        type: Number,
        require: true,
        min: 0,
    }
}, {
    timestamps: true,
    strict: false
})

export default model("orders", ordersSchema);
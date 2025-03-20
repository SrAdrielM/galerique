/*
orderId
address
    number
    expDate
    cvv
cardInfo
 */

import {Schema, model} from "mongoose";

const salesSchema = new Schema({
    address: {
        type: String,
        require: true
    },
    cardInfo: [{
        number: {
            type: Number,
            require: true
        },
        expDate: {
            type: String,
            require: true
        },
        cvv: {
            type: String,
            require: true
        }
    }],
    idOrder: {
        type: Schema.Types.ObjectId,
        ref: "orders",
        require: true,
    }
}, {
    timestamps: true,
    strict: false
})

export default model("sales", salesSchema);
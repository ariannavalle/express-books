const mongoose = require("mongoose");
const { Agent } = require("http");
const {Schema, model} = mongoose;

const authorSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String},
        age: {type: Number},
        books: {
            type: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
        }
    },
    {
        timestamps: true
    }
)

module.exports = model("Author", authorSchema)
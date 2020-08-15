const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const bookSchema = new Schema(
    {
        title: {type: String, required: true},
        author: { type: [{ type: Schema.Types.ObjectId, ref: 'Author' }] },
        description: {type: String}, 
        coverImg: {type: String, default:"https://memegenerator.net/img/images/16143029.jpg"},
        year: {type: Number},
        rating: {type: Number}
    },
    {
        timestamps: true
    }
)

const Book = model("Book", bookSchema)
module.exports = Book;
const express = require("express");
const router = express.Router();
const Book = require("../../models/book");

router.get("/create", (req, res, next) => {
	res.render("book-views/createBook");
});

router.post("/create", (req, res, next) => {
	console.log({ body: req.body });
	Book.create(req.body)
		.then((createdBook) => {
			res.render("book-views/createBook", { book: createdBook });
		})
		.catch((err) => console.log(`Error creating book: ${err}`));
});

module.exports = router;
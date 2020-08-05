const express = require("express");
const router = express.Router();
const Book = require("../../models/book");

router.get("/browse", (req,res,next)=>{
	Book.find()
	.then(booksFromDB => {
		console.log(`List of books: ${booksFromDB}`)
		res.render("book-views/listBooks", {books: booksFromDB})
	})
	.catch(err => console.log(`Error retrieving books: ${err}`))
})

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

router.get('/:id', (req, res, next)=>{
	Book.findById(req.params.id)
	.then(bookFromDB => {
		console.log("test:",bookFromDB)
		res.render("book-views/bookDetails", {book : bookFromDB})
	})
	.catch(err => console.log(`Error retrieving book details: ${err}`))
	
})

module.exports = router;
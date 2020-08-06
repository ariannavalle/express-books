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
			res.render("book-views/bookDetails", { book: createdBook });
		})
		.catch((err) => console.log(`Error creating book: ${err}`));
});

router.get("/update/:id", (req, res, next) => {
		const { id } = req.params;
		Book.findById(id)
		  .then(bookToEdit => {
			res.render("book-views/editBook", bookToEdit);
		  })
		  .catch(error => console.log(`Error while getting a single book for edit: ${error}`));
	  });

router.post("/update/:id", (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedBook) => {
			console.log({ updatedBook });
			
            res.redirect("back");
        })
        .catch((err) => console.log(`Error updating book: ${err}`));
});

router.get('/:id', (req, res, next)=>{
	Book.findById(req.params.id)
	.then(bookFromDB => {
		res.render("book-views/bookDetails", {book : bookFromDB})
	})
	.catch(err => console.log(`Error retrieving book details: ${err}`))
	
})

module.exports = router;
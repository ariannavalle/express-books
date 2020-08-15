const express = require("express");
const router = express.Router();
const Author = require("../../models/author");
const Book = require("../../models/book")

router.get("/browse", (req,res,next)=>{
	Author.find()
	.then(authorsFromDB => {
		// console.log(`List of authors: ${authorsFromDB}`)
		res.render("author-views/listAuthors", {authors: authorsFromDB})
	})
	.catch(err => console.log(`Error retrieving authors: ${err}`))
})

router.get("/create", (req, res, next) => {
	res.render("author-views/createAuthor");
});

router.post("/create", (req, res, next) => {
	// console.log({ body: req.body });
	Author.create(req.body)
		.then((createdAuthor) => {
			res.render("author-views/authorDetails", { author: createdAuthor });
		})
		.catch((err) => console.log(`Error creating author: ${err}`));
});

router.get("/update/:id", (req, res, next) => {
		const { id } = req.params;
		Author.findById(id)
		  .then(authorToEdit => {
			Book.find()
			.then((books) => {
				const data = {
					...authorToEdit,
					books,
				};
				res.render("author-views/editAuthor", data);
				console.log(data)
		  })
		  .catch(error => console.log(`Error getting books to edit: ${error}`));
	  })
	  .catch((err) =>
	  console.log(`Error finding author in Database to edit: ${err}`)
  );
});


router.post("/update/:id", (req, res, next) => {
    Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedAuthor) => {
			Book.find({ _id: { $in: updatedAuthor.books } })
                .then(async (booksArray) => {
                    // console.log({ booksArray });

                    // loop through each book in the array ov books that belongs to the cast member and add the author array from the book.
                    await booksArray.forEach(async (book) => {
                        if (
                            !book.author.includes(req.params.id)
                        ) {
                            // save the book info in the database once the cast member id has been added the list of author in the book
                            book.author.push(req.params.id);
                            await book.save();
                        }
                    });
			console.log({ updatedAuthor });
			res.redirect(`/authors/${req.params.id}`)
        }).catch((err) =>
		console.log(
			`Error getting books from cast member array: ${err}`
		)
	)
})
        .catch((err) => console.log(`Error updating author: ${err}`));
});

router.post("/delete/:id", (req, res, next) => {
    Author.findByIdAndDelete(req.params.id)
	.then(() => res.redirect('/authors/browse'))
    .catch(error => console.log(`Error while deleting a author: ${error}`));
});

router.get('/:id', (req, res, next)=>{
	Author.findById(req.params.id)
	.then(authorFromDB => {
		res.render("author-views/authorDetails", {author : authorFromDB})
	})
	.catch(err => console.log(`Error retrieving author details: ${err}`))
	
})

module.exports = router;
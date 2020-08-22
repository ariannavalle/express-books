const express = require("express");
const router = express.Router();
const Author = require("../../models/author");

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
			res.render("author-views/editAuthor", authorToEdit);
		  })
		  .catch(error => console.log(`Error while getting a single author for edit: ${error}`));
	  });

router.post("/update/:id", (req, res, next) => {
    Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedAuthor) => {
			console.log({ updatedAuthor });
			res.redirect(`/authors/${req.params.id}`)
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
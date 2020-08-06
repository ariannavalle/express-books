const mongoose = require("mongoose");
const Book = require('../models/book.js');

mongoose
    .connect("mongodb://localhost/express-books", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })


const books = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    description:
      'The Hunger Games is a series of young adult dystopian novels written by American novelist Suzanne Collins. The series is set in The Hunger Games universe, and follows young Katniss Everdeen. The novels in the trilogy are titled The Hunger Games, Catching Fire, and Mockingjay.',
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",
    year: 2008,
    rating: 10
  },
  {
    title: 'The Fault in Our Stars',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'John Green',
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/81yAo5ElQlL.jpg",
    rating: 8
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    coverImg: "https://pictures.abebooks.com/ARTYBEES/30016795677.jpg",
    year: 1997,
    rating: 9
  },
  {
    title: 'To Kill a Mockingbird',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Harper Lee',
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51IXWZzlgSL._SY445_QL70_ML2_.jpg",
    rating: 8
  },
  {
    title: 'Pride and Prejudice',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Jane Austen',
    coverImg: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4351/9781435159631.jpg",
    rating: 9
  },
  {
    title: 'Twilight',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Stephenie Meyer ',
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/41K99+cInvL._SX326_BO1,204,203,200_.jpg",
    rating: 10
  },
  {
    title: 'The Book Thief',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Markus Zusak',
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/9123eop9gIL.jpg",
    rating: 7
  },
  {
    title: 'The Chronicles of Narnia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'C.S. Lewis',
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51lOSC0wbfL._SX331_BO1,204,203,200_.jpg",
    rating: 8
  },
  {
    title: 'Twisted',
    author: 'Laurie Halse Anderson',
    description:
      'High school senior Tyler Miller used to be the kind of guy who faded into the background–average student, average looks, average dysfunctional family. But since he got busted for doing graffiti on the school, and spent the summer doing outdoor work to pay for it, he stands out like you wouldn’t believe. His new physique attracts the attention of queen bee Bethany Milbury, who just so happens to be his father’s boss’s daughter, the sister of his biggest enemy–and Tyler’s secret crush. And that sets off a string of events and changes that have Tyler questioning his place in the school, in his family, and in the world.',
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/91xmQ4usVcL.jpg",
    year: 2007,
    rating: 8
  },
  {
    title: 'Animal Farm',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'George Orwell',
    coverImg: "https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images-medium-5/animal-farm-book-cover-poster-art-1-nishanth-gopinathan.jpg",
    rating: 9
  },
  {
    title: 'Gone with the Wind',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Margaret Mitchell',
    coverImg: "https://prodimage.images-bn.com/pimages/9781451635621_p0_v3_s1200x630.jpg",
    rating: 10
  }
];
 
Book.create(books)
  .then(booksFromDB => {
    console.log(`Created ${booksFromDB.length} books`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while getting books from the DB: ${err}`));
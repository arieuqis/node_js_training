import books from "../models/Book.js";

class BookController {
  static findAllBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };

  static findById = (req, res) => {
    const id = req.params.id;

    books.findById(id, (err, booksR) => {
      if( err ){
        res.status(404).send({message: `${err.message} - Not found`})
      } else {
        res.status(200).send(booksR)
      }
    })
  };

  static createBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed on creating the new book`,
        });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed on updating book with id ${id}`,
        });
      } else {
        res.status(200).send({message: 'Done!!'});
      }
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed on deleting book with id ${id}`,
        });
      } else {
        res.status(200).send({message: 'Deleted sucessfully!!'});
      }
    });
  };
}

export default BookController;

import authors from "../models/Author.js";

class AuthorsController {
  static findAllAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static findById = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authorsR) => {
      if( err ){
        res.status(404).send({message: `${err.message} - Not found`})
      } else {
        res.status(200).send(authorsR)
      }
    })
  };

  static createAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed on creating the new Author`,
        });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed on updating Author with id ${id}`,
        });
      } else {
        res.status(200).send({message: 'Done!!'});
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed on deleting Author with id ${id}`,
        });
      } else {
        res.status(200).send({message: 'Deleted sucessfully!!'});
      }
    });
  };
}

export default AuthorsController;

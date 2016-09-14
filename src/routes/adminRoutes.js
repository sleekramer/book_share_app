var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
  {
    title: 'Responsive Web Design',
    author: 'Ethan Marcotte',
    genre: 'book i like',
    read: false
  },
  {
    title: 'Born to Run',
    author: 'That guy',
    genre: 'book i like',
    read: false
  },
  {
    title: 'Being the second president',
    author: 'John Adams',
    genre: 'book i like',
    read: false
  },
  {
    title: 'Pretty Much Everything',
    author: 'Aaron James Draplin',
    genre: 'book i like',
    read: false
  },
  {
    title: 'The Fellowship of the Ring',
    author: 'J.R. Tolkein',
    genre: 'book i like',
    read: false
  }
];

var router = function (nav) {
  adminRouter.route('/addBooks')
    .get(function (req, res) {
      var url = 'mongodb://localhost:27017/libraryApp';
      mongodb.connect(url, function (err, db) {
        var collection = db.collection('books');
        collection.insertMany(books, function (err, results) {
          res.send(results);
          db.close();
        });
      });
    });

  return adminRouter;
};

module.exports = router;

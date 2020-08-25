const bodyParser = require("body-parser");
const Todo = require("../models/todo");
module.exports = function (app) {
  // using middleware to parse body
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // to get the usernames through the todo model
  app.get("/api/todos/:uname", function (req, res) {
    Todo.find({ userName: req.params.uname }, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
  // to get the ids through the todo model
  app.get("/api/todo/:id", function (req, res) {
    Todo.findById({ _id: req.params.id }, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
  // to post the new entry into todo model
  app.post("/api/todo", function (req, res) {
    if (req.body.id) {
      Todo.findByIdAndUpdate(
        req.body.id,
        {
          userName: req.body.userName,
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        },
        function (err, results) {
          if (err) throw err;
          res.send(results);
        }
      );
    } else {
      Todo.create(
        {
          userName: req.body.userName,
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        },
        function (err, results) {
          res.send(results);
        }
      );
    }
  });
  // to delete the given todo
  app.delete("/api/todo", function (req, res) {
    Todo.findOneAndDelete({id : req.body.id}, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
};

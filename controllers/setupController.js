const Todo = require("../models/todo");

const initialData = [
  {
    userName: "Gayle",
    todo: "Go to shopping",
    isDone: false,
    hasAttachment: false,
  },
  {
    userName: "Dickerson",
    todo: "Get fruits",
    isDone: true,
    hasAttachment: false,
  },
  {
    userName: "Lowery",
    todo: "Get vegetables",
    isDone: false,
    hasAttachment: false,
  },
  {
    userName: "Carr",
    todo: "Get some stuff",
    isDone: true,
    hasAttachment: false,
  },
];
module.exports = function (app) {
  app.get("/api/setup", async function (req, res) {
    await Todo.create(initialData, function(err, results) {
      if(err) throw err;
      res.send(results);
    });
  });
};

const config = require("./config.json");

module.exports = {
  getConnectionUri: function () {
    const connUri = `mongodb+srv://${config.uname}:${config.pwd}@cluster0.0ms3l.mongodb.net/node-todo-app?retryWrites=true&w=majority`;
    return connUri;
  },
};

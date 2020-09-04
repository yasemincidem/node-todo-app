# node-todo-app
This app provides the crud operations using Nodejs, Express, Mongodb and Mogoose and also provides the ui page to make them happpen the crud operations using React and Webpack. 

## Installation:
After you cloned the application. You need to follow in the following steps.

##### Db Part:
1. Create a cluster through Mongodb atlas (You should follow this documentation https://docs.atlas.mongodb.com/tutorial/create-new-cluster/

2. Connect to cluster to get the connection url (You should follow this documentation https://docs.atlas.mongodb.com/connect-to-cluster/

3. After getting Connection Url. You should change `config/index.js`and `config/config.json` files with yours configuration.

Note: If you want to interact with cluster data, you should follow these instructions https://docs.atlas.mongodb.com/data-explorer/databases-collections/

##### Nodejs part:
1. npm install (yarn install)

2. npm start(yarn start) => this command runs both api and ui codes at the same time.

## Example crud operations:
``` 
  // To get whole todos from db
  app.get('/api/todos', function (req, res) {
    Todo.find({}, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });

  // to get the usernames through the todo model
  app.get('/api/todos/:uname', function (req, res) {
    Todo.find({ userName: req.params.uname }, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
  
  // to get the ids through the todo model
  app.get('/api/todo/:id', function (req, res) {
    Todo.findById({ _id: req.params.id }, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
  
  // to post the new entry into todo model or update the existing one
  app.post('/api/todo', function (req, res) {
    if (req.body.id) {
      Todo.findByIdAndUpdate(
        req.body.id,
        {
          userName: req.body.userName,
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        },
        { new: true },
        function (err, results) {
          if (err) throw err;
          res.send(results);
        },
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
        },
      );
    }
  });
  
  // to delete the given todo
  app.delete('/api/todo/:id', function (req, res) {
    Todo.findOneAndDelete({ _id: req.params.id }, function (err, results) {
      if (err) throw err;
      console.log('results', results);
      res.send(results);
    });
  });
  ```
## Demo:
![example](./demo.gif)

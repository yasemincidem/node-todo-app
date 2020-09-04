# node-todo-app
This app provides the crud operations using Nodejs, Express, Mongodb and Mogoose and also provides the ui page to make them happpen the crud operations using React and Webpack. 

## Installation:
After you cloned the application. You need to follow in the following steps.

##### Db Part:
1.) Create a cluster through Mongodb atlas (You should follow this documentation https://docs.atlas.mongodb.com/tutorial/create-new-cluster/

2.) Connect to cluster to get the connection url (You should follow this documentation https://docs.atlas.mongodb.com/connect-to-cluster/

3.) After getting Connection Url. You should change `config/index.js`and `config/config.json` files with yours configuration.

Note: If you want to interact with cluster data, you should follow these instructions https://docs.atlas.mongodb.com/data-explorer/databases-collections/

##### Nodejs part:
1.) npm install (yarn install)

2.) npm start(yarn start) => this command runs both api and ui codes at the same time.

## Demo:
![example](./demo.gif)

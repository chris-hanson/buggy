#About Buggy

Backbone app created to demonstrate CRUD actions and how Backbone interacts with a RESTful end point.

##Usage

There is no real backend, you need to mock it using someting like [json-server](https://github.com/typicode/json-server).

Install json-server from the command line with: 

		npm install -g json-server

cd into the buggy/ directory and start the json server with: 

		json-server --file db.json

A server will start at http://localhost:3000 - this app will use the endpoint at http://localhost:3000/bugs
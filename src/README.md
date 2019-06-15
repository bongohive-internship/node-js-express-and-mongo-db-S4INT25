# Node-with-mongo-db-and-express
This will teach and test you on how to connect to mongo db, create databases, collections and adding and retrieving documents.
With Express and Node JS.


# Getting started

Lets extend the last course that we did on running Node JS with Express JS package. You will need to extend the routes so that instead of accessing data from arrays and json objects, your Node JS server should store and retrieve from mongo db database.

You have familiarized with mongo db nosql database in the last course. You will not be using mongo db shell in this course but you will access mongo db from Node JS.

# Jumping into code

To work with mongo db from Node JS, Node JS offers a package that helps to connect to the running mongo db daemon (mongod). You will need to install the mongo db package with npm to get started with mongo db from Node JS.

Its a good practice to always have the mongo db daemon (mongod) running as a service and sarts at start up.

In this repository, navigate to the src folder and open index.js file in any editor of your choice.

> If you are successfull, do the following;

  - install and add Express js to the index.js file
  - install and add mongodb package to index.js file
  - create a mongo db database called bongohive
  - create a collection called startups inside bongohive database with the following schem. Use default ids for all documents
 
  ``` javascript
  startup: {
        id: 'use default id that mongo db provides'
        name : 'name of startup'
        description: 'description of the startup'
        startDate: 'date when the startup started'
        founder: 'name of startup founder'
    }
  ```  
    
> Create the following routes
   - POST ('/startup') it should insert startup document into startups collection when it is given the startup document details
   - GET ('/startup') should return a startup when given the name of a startup founder.
   - GET ('/startups') should return a json object list of all startups in the startups collection.
   - PUT ('/startup') should edit and update requested startup with sent startup details.
   
 # Materials to read
 
 During the couse of this course you can use but not limited to the following online materials
 
 - https://www.npmjs.com/package/mongodb
 - https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp
 - https://www.w3schools.com/nodejs/nodejs_mongodb.asp
 - https://www.guru99.com/node-js-mongodb.html
 - https://flaviocopes.com/node-mongodb/
 - https://www.tutorialsteacher.com/nodejs/access-mongodb-in-nodejs
 - https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
 - https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/
 - https://docs.mongodb.com/manual/reference/program/mongodump/
 
   
# Assignment
Hand in this repository by pushing it to github, the repository should have the index.js file with all the routes that you created including all the necessary files and folders.

Using the previous course, make a copy of your database using mongodump tool and save the bongohive database in a folder called database in this repository.

Your push to gihub sholud have a copy of your bongohive mongo database too.

Submit this repository with the following files
 - src/index.js file that has your expres js routes
 - database/bongohive  this is a folder that should have you mongo db database files
 - node_modules folder that has any packages that this project depends on
 - Other created files  

DONE
 
 



  






  

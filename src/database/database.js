const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;
const url = 'mongodb://localhost/Bongohive';
const mongodbConnect = (callback) =>
{


    mongodbClient.connect(url,{ useNewUrlParser: true } )
    .then(client =>{
         callback(client);
       
        
        console.log("listening on port 3000");
            })
    .catch(err =>{
    
        console.log(err);
    });

};



module.exports = mongodbConnect;









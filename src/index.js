const express = require('express');
const app = express();
const mongodbConnect = require('./database/database');
let dbc;



app.get('/',(req,res) =>
{
  res.send('startup registration');
});


app.get('/startups',(req,res) =>{

    dbc.collection('startups').find()
    .toArray()
    .then(startups =>{
        return res.status(200).json(startups);
    })
    .catch(err =>{
        throw err;

    });
});


app.post('/startup/:name/:description/:startdate/:founder',(req,res) =>{
    
    const startupName = req.params.name.toLowerCase();
    const startupDescription = req.params.description;
    const startupStartDate = req.params.startdate;
    const startupFounder = req.params.founder.toLowerCase();
    
    dbc.collection('startups').insertOne({
    
        name:startupName,
        description:startupDescription,
        startdate:startupStartDate,
        founder: startupFounder
        }).then(result =>{
            console.log(result)
            return res.status(200).send(result);
        })
        .catch(err =>{
            console.log(err);
            throw err;
        });


});

app.get('/startup/:founder',(req,res)=>{

    const founderName = req.params.founder.toLowerCase();
   dbc.collection('startups').find({founder:founderName})
   .toArray()
   .then(startup =>{
        return res.status(200).json(startup);
    })
    .catch(err =>{
        console.log(err);
        throw err;
    });
 
});


app.put('/startup/edit/:searchbyName/:name/:description/:startdate/:founder',(req,res) =>{
        const searchName = req.params.searchbyName;
        const updatedName = req.params.name;
        const updatedDescription = req.params.description;
        const updatedDate = req.params.startdate;
        const updatedfounder = req.params.founder;

        dbc.collection('startups')
        .updateOne({founder:searchName},
            {$set:
                {
                    name:updatedName,
                    description:updatedDescription,
                    startdate:updatedDate,
                    founder:updatedfounder 
                }})
        .then(startup =>{
           return res.status(200).json(startup);
            
           })
        .catch(err =>{
            console.log(err);
        });
});



mongodbConnect((client) => {
    dbc = client.db('Bongohive');
    app.listen(3000);
   
});



  


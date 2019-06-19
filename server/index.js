//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////// ---dépendense--- ///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// get config for the port and anothers.
require('dotenv').config();

// framework to use node more simply
const express = require('express');

//before your handlers, available under the req.body property.
const bodyParser = require('body-parser');

//middleware that can be used to enable CORS with various options.
const cors = require('cors');

// service for connect mongo 
const mongoConnect = require('./services/db.service');
const app = express();


//////////////////////////////////////////////////////////// --api fils-- //////////////////////////////////////////////////////////////////
const facts = require('./routes/api/facts');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////// ---beginning--- ///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MiddleWare use 
app.use(bodyParser.json());
app.use(cors());


// call api fact whene use the url /api/facts
app.use('/api/facts', facts);

/// port
const port = process.env.PORT;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////// --- start server --- ///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

mongoConnect()
.then( db => {
    app.listen( port, () => console.log({ server: port, db: process.env.MONGO_URL }) )
})
.catch( dbError => {
    app.listen( port, () => console.log({ server: port, db: dbError }) )
})
//
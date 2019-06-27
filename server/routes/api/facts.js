//////////// --- DEPENDANCES ---  //////////////

require('dotenv').config();

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


//////////// --- CALL API URL / ROUTING ---  //////////


/////////// --- FUNCTIONS ---  //////////////

async function loadFactsCollection() { 
  const client = await mongodb.MongoClient.connect(process.env.MONGO_URL, {useNewUrlParser: true});
  return client.db('vue_express').collection('facts')
}

//////////// --- CALL API ---  //////////////

// Get Facts

router.get('/', async (req, res)=>{
  const posts = await loadFactsCollection();
  res.send(await posts.find({}).toArray());
});

router.post('/:name/:child/:text/:title', async (req, res)=>{ 
  const facts = await loadFactsCollection();
  const childIndex = req.params.child;

  switch (childIndex) {
    case '1' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.one.text" : req.params.text,
          "childComponents.one.title" : req.params.title
          },
        }
      );
      break;
    case '2' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.two.text" : req.params.text,
          "childComponents.two.title" : req.params.title
          },
        }
      );
      break;
      case '3' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.three.text" : req.params.text,
          "childComponents.three.title" : req.params.title
          },
        }
      );
      break;
      case '4' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.four.text" : req.params.text,
          "childComponents.four.title" : req.params.title
          },
        }
      );
      break;
      case '5' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.five.text" : req.params.text,
          "childComponents.five.title" : req.params.title
          },
        }
      );
      break;
      case '6' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.six.text" : req.params.text,
          "childComponents.six.title" : req.params.title
          },
        }
      );
      break;
      case '7' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.seven.text" : req.params.text,
          "childComponents.seven.title" : req.params.title
          },
        }
      );
      break;
      case '8' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.height.text" : req.params.text,
          "childComponents.height.title" : req.params.title
          },
        }
      );
      break;
      case '9' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.nine.text" : req.params.text,
          "childComponents.nine.title" : req.params.title
          },
        }
      );
      break;
      case '10' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.ten.text" : req.params.text,
          "childComponents.ten.title" : req.params.title
          },
        }
      );
      break;
      case '11' : 
      await facts.updateOne({"name" : req.params.name}, 
        {$set: {
          "childComponents.eleven.text" : req.params.text,
          "childComponents.eleven.title" : req.params.title
          },
        }
      );
      break;
  }


  res.status(201).send();
})

// Delete Facts

router.delete('/:id', async (req, res)=>{
  const facts = await loadFactsCollection();
  await facts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(200).send();
})


module.exports = router;

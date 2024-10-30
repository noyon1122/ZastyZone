const express=require('express')
const cors=require('cors')
const port=process.env.PORT || 5000
require('dotenv').config()
const app=express()

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
//

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("This is form the server side")
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gjamq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
   // await client.connect();
    const foodCollection=client.db('ZastyZone').collection('foodDetails')
    const cartCollection=client.db('ZastyZone').collection('cartDetails')

    //insert food in the database 
    app.post('/foods',async(req,res)=>{
        const newFood=req.body;
        console.log(newFood)
        const result=await foodCollection.insertOne(newFood)
        res.send(result)

    })
    //get all the food from the database
    app.get('/allfoods',async(req,res)=>{
        const result=await foodCollection.find().toArray()
        res.send(result)
    })
    //get a single food using id
    app.get('/foodDetails/:id',async(req,res)=>{
      const id=req.params.id;
      console.log(id)
      const query={ _id : new ObjectId(id)}
      const result=await foodCollection.findOne(query)
      res.send(result)
    })

    //add to the carDetails collection
    app.post('/cart',async(req,res)=>{
      const cartFood=req.body
      const result=await cartCollection.insertOne(cartFood)
      res.send(result)
    })
  
     //get all food using by user for add to cart 
     app.get('/cart/:email',async(req,res)=>{
      const email=req.params.email;
     console.log(email)
      const query={email:email}
      const result=await cartCollection.find(query).toArray()
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);


app.listen(port,()=>{
    console.log(`Server is running on port : `,port)
})
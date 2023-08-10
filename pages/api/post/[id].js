import clientPromise from "@libs/mongodb";
import {ObjectId} from 'mongodb'
export default async function handler(req, res) {
  const { id } = req.query;
  const client = await clientPromise;
  const db = client.db("blogDB");
  const collection = db.collection('posts')

  switch (req.method) {
    case "GET":
      const post = await collection.findOne({ _id: new ObjectId(id)});
      res.json({data:post});
      break;
    case "PUT":
      const {title, content}= req.body
      const updatePost = await collection.updateOne({_id: new ObjectId(id)},{$set:{title, content}})
      res.json({message : "updatePost"}) 
      break; 
    case "DELETE": 
      const deletePost = await collection.deleteOne({_id: new ObjectId(id)})
      res.json({message: "Deleted"}, {status : 200}) 
      break   
      
  }

}


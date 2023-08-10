import clientPromise from "@libs/mongodb";
export default async function handler(req, res) {
  
  const client = await clientPromise;
  const db = client.db("blogDB");
  switch (req.method) {
    case "POST":
      let bodyObject = req.body;
      let myPost = await db.collection('posts').insertOne(bodyObject);
      res.json({myPost});
      
      break;
    case "GET":
      const allPosts = await db.collection("posts").find({}).toArray();
      res.json({data:allPosts});
      break;
      

  }
}


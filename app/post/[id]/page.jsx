
async function getDataById(id) {
  
  const API_URL = process.env.API_URL
  const res = await fetch(
    `${API_URL}/api/post/${id}`,
    {
      cache: "no-store",
    },

  );


  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Post({params}) {
  const {id} = params
  const Post= await getDataById(id)
  return (
    <div className="px-[15%] py-[4%] mb-[60%] sm:mb-[30%]">
     
       <h1 className="font-bold text-2xl mb-5">{Post.data.title} </h1>
       <h3 className="font-medium text-gray-600">{Post.data.content}</h3>
  </div>
  
  )
  
  
  
}
import EditForm from "@components/EditForm.jsx"
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
export default async function Form({params}) { 
    const id = params.id  
    const Post= await getDataById(id)
    return (
      <EditForm id={id} title={Post.data.title} content={Post.data.content}/>
  )
}

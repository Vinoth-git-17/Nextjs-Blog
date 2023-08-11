import Posts from "@components/Posts"
export const getData= async ()=>{
   const API_URL = process.env.API_URL
   const res = await fetch(`${API_URL}/api/posts`, {
     cache: "no-store",
   });
 
   if (!res.ok) {
     throw new Error("Failed to fetch data");
   }
  
  return res.json()
 }


const Home = async () => {
   const allPosts = await getData();
   return(    
    <Posts posts={allPosts} />
   )
}
export default Home;

"use client"
import React, {useState} from 'react'
import { useRouter } from "next/navigation";
import { revalidateTag } from 'next/cache';
const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    
    e.preventDefault()
    const postData = async () => {
      const data = {
        title: title,
        content: content,
      };

      const response = await fetch(`api/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      return response.json();
    };
    postData().then(() => {
      alert('Successfully Posted');
      
      router.push("/")
      router.refresh("/")
    });
  }
  return (
    <div className="px-[15%] py-[4%] mb-[20%] ">
    <h1 className="font-bold text-lg mb-5">COMPOSE</h1>
   
        <div className="flex flex-col gap-y-2 ">
            <label className="text-md font-bold">Title</label>
            <input type="text" className="p-2.5 rounded-md border border-gray-500  focus:border-blue-500 form-control" value={title} onChange={(e) => setTitle(e.target.value)} autocomplete="off"/>
            <label className="text-md font-bold pt-2">Post</label>
            <textarea className=" p-2.5 rounded-md  border border-gray-500   focus:border-blue-500  form-control" value={content} cols="30" rows="5" onChange={(e) => setContent(e.target.value)}></textarea> 
          <button type="submit"className=" mt-5 p-2 rounded-lg text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-400" onClick={handleSubmit}>Publish</button>
            
        </div>
  </div>
  )
}

export default Form
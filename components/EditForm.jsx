"use client"
import React, {useState} from 'react'
import { useRouter } from "next/navigation";

const EditForm = ({id, title, content}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const router = useRouter();
  function handleSubmit(e) {
    
    e.preventDefault()
    const putData = async () => {
        const data = {
          title: newTitle,
          content: newContent,
        };
  
        const response = await fetch(`/api/post/${id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        return response.json();
      };
      putData().then(() => {
        alert('Successfully Updated');
        router.push("/")
        router.refresh("/")
      });

  }
  return (
    <div className="px-[15%] py-[4%] mb-[20%]">
    <h1 className="font-bold text-lg mb-5">EDIT</h1>
   
        <div className="flex flex-col gap-y-2 ">
            <label className="text-md font-bold">Title</label>
            <input type="text" className="p-2.5 rounded-md border border-gray-500  focus:border-blue-500 form-control" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} autocomplete="off"/>
            <label className="text-md font-bold pt-2">Post</label>
            <textarea className=" p-2.5 rounded-md  border border-gray-500   focus:border-blue-500  form-control" value={newContent} cols="30" rows="5" onChange={(e) => setNewContent(e.target.value)}></textarea> 
          <button type="submit"className=" mt-5 p-2 rounded-lg text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-400" onClick={handleSubmit}>Publish</button>
            
        </div>
  </div>
  )
}

export default EditForm
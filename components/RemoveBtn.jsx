"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';
const RemoveBtn = ({id}) => {
  const Router = useRouter()
    async function handleDelete(id){
     
    const confirmed = confirm("Are you sure?");
    
      if (confirmed) {
        const res = await fetch(`api/post/${id}`, {
          method: "DELETE",
        });
         
        
        if (res.ok) {
        
         Router.refresh()
         alert("Successfully Deleted")
        }
      }
  }

  return (
 <button onClick={()=>handleDelete(id)} className='h-0'>
    <FontAwesomeIcon icon={faTrashCan} width={20} />
  </button>
  )
}

export default RemoveBtn
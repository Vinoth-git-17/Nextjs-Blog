
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import RemoveBtn from "@components/RemoveBtn"
import Link from "next/link";

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


const Posts = async() => {
  const posts = await getData();
 
  return (
    <section className="mb-[10%]">
      {posts.data.map((Post) => (
        <div className="flex justify-between px-[15%] py-[4%] " key={Post._id}>
          <div>
            <h1 className="font-bold text-2xl mb-5">{Post.title}</h1>
            <h3 className="font-medium  text-gray-700  pb-5">
              {Post.content.substring(0, 200) + " ..."}
            </h3>
            <Link href={`/post/${Post._id}`} className="font-semibold text-lg">
              Continue Reading  <FontAwesomeIcon  icon={faArrowRight}/>

            </Link>
          </div>
          <div className="flex gap-4">
            <Link href={`/editform/${Post._id}`}>
              <FontAwesomeIcon icon={faPenToSquare} width={20} />
            </Link>
            <RemoveBtn  id={`${Post._id}`}/>
       
          </div>
        </div>
      ))}
    </section>
  );
};


export default Posts
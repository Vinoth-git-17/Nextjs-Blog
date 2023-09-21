import {about} from "@public/static/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const {name, description, website} = about
import Link from "next/link"
const About = () => {
  return (
    <div className="px-[15%] py-[2%] flex flex-col gap-y-4 mb-[60%] md:mb-[30%]">
     <h1 className="font-bold text-xl mb-3">ABOUT</h1>
     <h1 className=" text-6xl">I'm{name}</h1>
     <h2 className="text-3xl">{description}</h2>
   
     <Link href={website} className="border-4 border-green-500 rounded-xl p-5 mt-3 w-[200px]  hover:bg-green-500">
      More about me  <FontAwesomeIcon className="inline-block" icon={faArrowRight} width={30}/>
     </Link>

     
      </div>
  )
}

export default About
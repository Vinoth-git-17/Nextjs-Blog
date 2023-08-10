import { Github, Instagram, Linkedin,MailOpen } from 'lucide-react'
import {contact} from "@public/Static/data.js"
import Link from 'next/link'
const {email, social_media} = contact
const Contact = () => {
  return (
    <div className="px-[15%] py-[2%] mb-[80%] md:mb-[30%]">
      <h1 className="font-bold text-lg mb-5">CONTACT</h1>
      <div className='flex mt-10 gap-5'>
      <Link href={social_media.github}>
      <Github/>
      </Link>
      <Link href={social_media.linkedin}>
      <Linkedin/>
      </Link>
      <Link href={social_media.instagram}>
        <Instagram/>
      </Link>
      <Link href={email}>
        <MailOpen/>
      </Link>
      </div>
      
    </div>
  )
}

export default Contact
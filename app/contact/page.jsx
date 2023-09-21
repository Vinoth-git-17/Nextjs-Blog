import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { contact } from "@public/Static/data.js";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const { email, github,linkedin, instagram } = contact;

function Icons(link, Iname, name) {
  return(
    <div className="flex gap-x-5 m-10">
      <Link href={link}>
      <FontAwesomeIcon icon={Iname} width="30" />
      <h1 className=" font-semibold">{name}</h1>

      </Link>
    </div>
    
  )
   
}
const Contact = () => {
  return (
    <div className="px-[15%] py-[2%] mb-[60%] md:mb-[30%]">
      <h1 className="font-bold text-lg mb-5">CONTACT</h1>
      
         {Icons(github, faGithub , "Github")}
         {Icons(instagram, faInstagram, "Instagram")}
         {Icons(linkedin, faLinkedin, "LinkedIn")}
         {Icons(email, faEnvelope, "Email")}
        
      
    </div>
  );
};

export default Contact;

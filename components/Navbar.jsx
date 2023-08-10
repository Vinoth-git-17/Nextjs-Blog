"use client";
import React, { useState, useEffect } from "react";
import { Spiral as Hamburger} from "hamburger-react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
    const [fix, setfixed] = useState(false)
    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        let offset = window.scrollY
          if((offset)>5){
            setfixed(true)
          }
          else{
              setfixed(false)
          }
      })
    },[])
    
  return (
    <>
      <nav className={ fix ? 'fixed px-[15%] py-[2%]  mb-12 bg-glass w-full': " px-[15%] py-[2%]  mb-12 bg-glass"}>
        <div className="flex justify-between">
          <div className="">
            <p className="mt-3 font-bold text-xl md:mt-0 ">DAILY JOURNAL</p>
          </div>
          <ul className="hidden md:flex gap-x-10 text-sm font-medium">
            <li id="home">
              <Link href="/">HOME</Link>
            </li>
            <li id="about">
              <Link href="/about">ABOUT US</Link>
            </li>
            <li id="contact">
              <Link href="/contact">CONTACT US</Link>
            </li>
            <li id="compose">
              <Link href="/compose">COMPOSE</Link>
            </li>
          </ul>
          {/* mobile menu */}
          <div className=" md:hidden ">
            <Hamburger
              toggled={isOpen}
              size={30}
              toggle={() => setOpen(!isOpen)}
            />
           
          </div>
        </div>
      </nav>
      <div className={isOpen ? "absolute top-[69.5px] w-[100%] text-center font-bold p-10 bg-glass": "hidden"}>
              <ul className="flex flex-col gap-y-10" onClick={()=>setOpen(!isOpen)}>
                <li id="home" className="hover:opacity-50 ">
                  <Link href="/">HOME</Link>
                </li>
                <li id="about" className="hover:opacity-50 ">
                  <Link href="/about">ABOUT US</Link>
                </li>
                <li id="contact"  className="hover:opacity-50 ">
                  <Link href="/contact">CONTACT US</Link>
                </li>
                <li id="compose" className="hover:opacity-50 ">
                  <Link href="/compose">COMPOSE</Link>
                </li>
              </ul>
      </div>
    </>
  );
};

export default Navbar;

'use client';

import { useState } from "react"
import { RiMenuFold4Line } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { IoIosArrowDropleft } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";


export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar flex flex-col justify-between fixed h-full top-0 left-0 p-5 z-50 transition-all duration-150 ease-in lg:w-72
        ${isOpen ? "w-72 bg-background/80" : "w-24"}`}
        >
      <div className="top-sidebar space-y-3">
        <h1 className="title uppercase text-2xl max-lg:hidden"><span>M</span>oua<span>d</span> Ou<span>aa</span>mmo<span>u</span></h1>
        <h3 className="max-lg:hidden">Creative Web Developer</h3>
        {isOpen ? <>
          <h1 className="title uppercase text-xl lg:hidden"><span>M</span>oua<span>d</span> Ou<span>aa</span>mmo<span>u</span></h1>
          <h3 className="lg:hidden">Creative Web Developer</h3>
        </>
          :
          <h1 className="title uppercase text-xl lg:hidden"><span>M</span>O</h1>
        }

      </div>

      {!isOpen ?
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-[50%] left-8 rounded-3xl cursor-pointer lg:hidden"
        >
          <RiMenuFold4Line size={30} />
        </button>
        :
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-[50%] right-1 rounded-3xl  p-1 cursor-pointer lg:hidden"
        >
          <IoIosArrowDropleft size={40} />
        </button>
      }


      <nav className="middle-sidebar">
        {isOpen &&
          <ul className="space-y-6 lg:hidden">
            <li className="underline_effect relative w-fit cursor-pointer">About</li>
            <li className="underline_effect relative w-fit cursor-pointer">Work</li>
            <li className="underline_effect relative w-fit cursor-pointer">Curriculum</li>
            <li className="underline_effect relative w-fit cursor-pointer">Contact</li>
          </ul>
        }

        <ul className="space-y-6 text-xl max-lg:hidden">
          <li className="underline_effect relative w-fit cursor-pointer">About</li>
          <li className="underline_effect relative w-fit cursor-pointer">Work</li>
          <li className="underline_effect relative w-fit cursor-pointer">Curriculum</li>
          <li className="underline_effect relative w-fit cursor-pointer">Contact</li>
        </ul>

      </nav>

      <div className="bottom-sidebar">
        <ul className="flex justify-around max-lg:hidden">
          <li className="underline_effect relative w-fit cursor-pointer">Github</li>
          <li className="underline_effect relative w-fit cursor-pointer">Linkedin</li>
          <li className="underline_effect relative w-fit cursor-pointer">Email</li>
        </ul>
        {isOpen ?
          <ul className="flex justify-around lg:hidden text-sm">
            <li className="underline_effect relative w-fit cursor-pointer">Github</li>
            <li className="underline_effect relative w-fit cursor-pointer">Linkedin</li>
            <li className="underline_effect relative w-fit cursor-pointer">Email</li>
          </ul>

          :

          <ul className="flex justify-around items-center gap-5 flex-col lg:hidden">
            <li><FiGithub size={18}/></li>
            <li><SiLinkedin size={18}/></li>
            <li><HiOutlineMailOpen size={18}/></li>
          </ul>
        }

      </div>
    </aside>
  )
}
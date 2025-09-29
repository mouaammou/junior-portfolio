'use client';

import { ChevronLeft, ChevronRight, Home, Briefcase, FileText, Mail, Github, Linkedin, ArrowRightToLine, ArrowLeftToLine } from "lucide-react"
import { useState } from "react"
import { RiMenuFold4Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";




export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <aside className={`sidebar flex flex-col justify-between fixed h-full top-0 left-0 p-5  transition-all duration-150 ease-in lg:w-72
        ${isOpen ? "w-72 bg-gray-700/60" : "w-24"}`}
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
          className="absolute top-[50%] left-9 rounded-3xl cursor-pointer lg:hidden"
        >
          <RiMenuFold4Line size={24} />
        </button>
        :
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-[50%] right-1 rounded-3xl bg-gray-100 text-gray-700 p-1 cursor-pointer lg:hidden"
        >
          <VscChromeClose size={30} />
        </button>
      }


      <nav className="middle-sidebar">
        {isOpen &&
          <ul className="space-y-6 lg:hidden">
            <li>About</li>
            <li>Work</li>
            <li>Curriculum</li>
            <li>Contact</li>
          </ul>
        }

        <ul className="space-y-6 text-xl max-lg:hidden">
          <li>About</li>
          <li>Work</li>
          <li>Curriculum</li>
          <li>Contact</li>
        </ul>

      </nav>

      <div className="bottom-sidebar">
        <ul className="flex justify-around max-lg:hidden">
          <li>Github</li>
          <li>Linkedin</li>
          <li>Email</li>
        </ul>
        {isOpen ?
          <ul className="flex justify-around lg:hidden text-sm">
            <li>Github</li>
            <li>Linkedin</li>
            <li>Email</li>
          </ul>

          :

          <ul className="flex justify-around items-center gap-5 flex-col lg:hidden">
            <li><Github size={18}/></li>
            <li><Linkedin size={18}/></li>
            <li><Mail size={18}/></li>
          </ul>
        }

      </div>
    </aside>
  )
}
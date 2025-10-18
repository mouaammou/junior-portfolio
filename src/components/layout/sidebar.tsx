'use client';

import { useEffect, useState } from "react"
import { RiMenuFold4Line } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { IoIosArrowDropleft } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";
import type { IconType } from "react-icons";
import Link from "next/link";


type NavItem = { label: string, href: string };
type SocialItem = { label: string, href: string, icon: IconType }

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: "/about" },
  { label: 'Work', href: "/work" },
  { label: 'Curriculum', href: "/curriculum" },
]

const SOCIAL_LINKS: SocialItem[] = [
  { label: 'Linkedin', href: "#linkedin", icon: SiLinkedin },
  { label: 'Github', href: "#github", icon: FiGithub },
  { label: 'eMail', href: "#email", icon: HiOutlineMailOpen },
]

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = () => setMatches(mq.matches);
    handler();
    mq.addEventListener('change', handler);

    return () => {
      mq.removeEventListener('change', handler);
    }
  }, [query])

  return matches;
}

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [activeIndex, setActiveIndex] = useState(-1);

  const expanded = isDesktop || isOpen;

  useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop])

  return (
    <aside className={`sidebar flex flex-col justify-between fixed h-full top-0 left-0 p-5 z-50 transition-all duration-150 ease-in  ${expanded ? "w-72" : "w-14 lg:w-72"} ${isOpen && 'bg-background/80'}`}>

      {/* top sidebar */}
      <Link className="top-sidebar space-y-3 w-full" href="/" onClick={() => setActiveIndex(-1)}>
        {expanded ? <>
          <h1 className="title uppercase text-xl">
            <span>M</span>oua<span>d</span> Ou<span>aa</span>mmo<span>u</span>
          </h1>
          <h3>Creative Web Developer</h3>
        </>
          :
          <h1 className="title uppercase text-xl absolute left-3"><span>M</span>O</h1>
        }
      </ Link>

      {/* Toggle button (mobile only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer lg:hidden"
      >
        {!isOpen ? <RiMenuFold4Line size={30} className="absolute top-[50%] left-3 " /> : <IoIosArrowDropleft size={40} className="absolute top-[50%] right-1 " />}
      </button>

      {/* Nav Links */}
      <nav className="middle-sidebar">
        {expanded &&
          <ul className="space-y-6 lg:text-xl">
            {
              NAV_ITEMS.map(({ label, href }, index) => (
                <li key={label}
                className={`${activeIndex === index && 'text-2xl transition-all ease-in duration-300 ml-5 w-fit border-b'}`}
                >
                  <Link
                    onClick={()=> setActiveIndex(index)}
                    href={href}
                    className={`relative w-fit cursor-pointer`}
                  >
                    {label}
                  </Link>
                </li>
              ))
            }
          </ul>
        }
      </nav>

      {/* Social Links */}
      <div className="bottom-sidebar">
        <ul className={`flex justify-around text-md lg:text-lg ${!expanded && 'items-center gap-5 flex-col'}`}>
          {
            SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label} className="underline_effect relative w-fit cursor-pointer">
                <Link
                  href={href}
                  target="_blank"
                >
                  {expanded ? label : <Icon size={18} />}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}
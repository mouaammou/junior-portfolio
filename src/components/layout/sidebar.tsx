import Link from "next/link"


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="top-sidebar space-y-3">
        <h1 className="title uppercase text-2xl"><span>M</span>oua<span>d</span> Ou<span>aa</span>mmo<span>u</span></h1>
        <h3>Creative Web Developer</h3>
      </div>

      <nav className="middle-sidebar">
        <ul className="space-y-6 text-xl">
          <li>About</li>
          <li>Work</li>
          <li>Curriculum</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="bottom-sidebar">
        <ul className="flex justify-around">
          <li>Github</li>
          <li>Linkedin</li>
          <li>Email</li>
        </ul>
      </div>
    </aside>
  )
}
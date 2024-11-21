import { useRef, useState } from "react"
import { links, social } from "./data";
import {FaBars} from 'react-icons/fa'
import logo from "./logo.svg"
const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksRef = useRef(null)
    const linksContainerRef = useRef(null)

    const toggleLinks = () => {
       setShowLinks(!showLinks);
    }

    const linkStyles = {
              height: showLinks ? 
                `${linksRef.current.getBoundingClientRect().height}px`
                : '0px'
    }

    return (
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>

          <div className="links-container" ref={linksContainerRef} style={linkStyles}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* social links */}
          <ul className="social-icons">
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
}

export default NavBar
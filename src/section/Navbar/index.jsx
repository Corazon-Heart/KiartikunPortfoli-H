import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const navs = [
    {title:"About", sectionId:"About-section"},
    {title:"Profile", sectionId:"Profile-section"},
    {title:"Education", sectionId:"Education-section"},
    {title:"Transcript", sectionId:"Transcript-section"},
    {title:"Activity", sectionId:"Activity-section"},
    {title:"Certificate", sectionId:"Certificate-section"},
]

const Navbar = ({navbaritems, currentSection }) => {

    const [isMouseEnter, setIsMouseEnter] = useState({});

    const handleClick = (sectionId) => {

      const element = document.getElementById(sectionId);
      if (element) {element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with ID "${sectionId}" not found.`);
      }
    };
    return (
        <div className='flex-col hidden font-semibold lg:flex mt-7'>
            {
                navbaritems.map((e, i) => (
                    <div
                        key={'e.sectionid-index'}
                            onClick={() => handleClick(e.sectionId)}
                            onMouseEnter={() => setIsMouseEnter({[e.title]: true})}
                            onMouseLeave={() => setIsMouseEnter({[e.title]: false})}
                            className="flex py-2 cursor-pointer"
                            >
                        <div>
                        
                        <FontAwesomeIcon 
                        
                        className={`${currentSection === e.sectionId ? "text-PcIconps" : isMouseEnter[e.title] ?  "" : "hidden"} new-play`} icon={faPlay} 
                        />
                        </div>
                        <div className={`${currentSection === e.sectionId || isMouseEnter[e.title] ?"translate-x-3":""}  duration-500 ease-out`}>{e.title} </div>
                    </div>
                ))
                }
        </div>
            )
        }
        
export default Navbar;
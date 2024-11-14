import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Titlelink = ({isHighlight, title, link }) => {

    if (!link) {
        return  <div className={` text-xl duration-300  ${isHighlight ? " text-PCcontent " : "text-gray-400"} `}>{title} </div> 
    }

    return (
        <div className={`text-xl duration-300   ${isHighlight ? " text-PCcontent " : "text-gray-400"} `}>
            <a href={link} target="_blank">
                {title}
                <FontAwesomeIcon className={`text-xs -rotate-45 duration-300 ease-out ${isHighlight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            </a>
        </div>
    )
}

export default Titlelink;
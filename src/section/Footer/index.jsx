import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () =>{
    return (
        <div className="mb-20">
            <div className="flex justify-end ">
                <span className="text-sm text-gray-400">
                Powered by React.js ,Tailwind ขอบคุณพี่ทีสอนทำครับผม Blackboy96
               <FontAwesomeIcon className="ml-2" icon={faGithub}/>
                <a href="https://www.youtube.com/watch?v=DOUP5gwk2jI&t=2430s"><FontAwesomeIcon className="ml-2" icon={faYoutube} /></a>
                </span>
            </div>
        </div>
    )
}

export default Footer; 
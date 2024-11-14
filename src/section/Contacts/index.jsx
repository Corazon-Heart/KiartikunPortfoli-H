import { faFacebook, faGithub, faInstagram, faLine } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contacts = () => {
    return (
        <div className='flex items-end gap-3 pb-2 text-2xl font-medium '>
            <div>Contacts:</div>
            <a href="https://github.com/Corazon-Heart" target='blank'><FontAwesomeIcon className ='transition-all hover:scale-150 hover:text-PCcontent ' icon={faGithub} /> </a> 
            <a href="https://www.facebook.com/heart.sky.733/" target='blank'><FontAwesomeIcon className ='transition-all hover:scale-150 hover:text-PCcontent ' icon={faFacebook} /></a> 
            <a href="https://www.instagram.com/_t_st.h/" target='blank'><FontAwesomeIcon className ='transition-all hover:scale-150 hover:text-PCcontent ' icon={faInstagram} /></a> 
            <a href="https://line.me/ti/p/ADywNCi64_" target='blank' ><FontAwesomeIcon className ='transition-all hover:scale-150 hover:text-PCcontent ' icon={faLine} /></a> 
            <a href="mailto:kiartikun.mi@gmail.com" target='blank' ><FontAwesomeIcon className ='transition-all hover:scale-150 hover:text-PCcontent ' icon={faEnvelope} /></a> 
            <a href="tel:0953422878" target='blank' ><FontAwesomeIcon className ='transition-all hover:scale-150 hover:text-PCcontent ' icon={faPhone} /></a> 
        </div>
    )
}

export default Contacts
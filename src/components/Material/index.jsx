import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({isHighlight, icon, link}) => {
    return (
        <a href={link} target="_blank" className={`transition-all hover:scale-150 duration-300 ${isHighlight ? "text-PcIconps" : ""}`} > 
            <FontAwesomeIcon icon={icon}/></a>
    )
}
export default Material;
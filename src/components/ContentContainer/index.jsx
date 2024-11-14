/*
<ContentContainer>
    title=" "
    data = {[]}
/>

*/
import { useEffect, useState } from "react";
import Picture from "../Pictures";
import Titlelink from "../Titlelink";
import Description from "../Description";
import Material from "../Material";
import FormattedDate from "../Formattdate";
import Tech from "../Skill";

const ContentContainer = ({
    onInitial,
    title: sectionTitle  = "",
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({}); 

    const SECTION_ID = `${sectionTitle}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    },[])

    return (
      <div id={SECTION_ID} className=" scroll-m-14">
        <div className="px-2 space-y-5 text-2xl font-medium text-PCtitle">{sectionTitle}</div>
        
        {
        data.map(({ date = "", title, link = "", materials = [], descriptions, skills = [], picture = "",
            
        }, index) => (
          <div
            key={`${SECTION_ID}-${index}-${title}`} 
            className={`grid grid-cols-[20%_75%] px-2 rounded-2xl py-5 duration-500 ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-PCcontentBg" : ""}`}
            onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
            onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
          >
            
            <div className="">
              <FormattedDate isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
              <Picture picture={picture} title={title} />
            </div>
  
        
            <div className="grid gap-y-4">
              <Titlelink isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
  
              
              {descriptions.map((e, i) => (
                <Description key={`${e}-description-${i}`} description={e} />
              ))}
  
              
              {

                <div className="flex items-center gap-5 text-2xl">
                 
                  {materials.map((e, i) => (
                    <Material key={`${e}-material-${i}`} icon={e.type} link={e.link} isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} />
                  ))
                  }
                </div>
                
              
              }
                {
                    skills.map((e, i) => (
                        <Tech key={`skill-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                    ))
                }
            </div>
          </div>
        ))}
      </div>
    )
}

export default ContentContainer;
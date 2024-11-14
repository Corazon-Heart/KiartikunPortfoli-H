import ContentContainer from "../../components/ContentContainer";
import About from "../About/index";
import { data as profileData } from "../../contents/profile"
import { data as educationdata } from "../../contents/Education"
import { data as activitydata } from "../../contents/Activity"
import { data as certificates } from "../../contents/certificate"
import Footer from "../Footer";

const RightSection = ({ onInitial }) =>{
    return (
        <div className="grid px-5 gap-y-14 lg:gap-y-40"> {/*Right*/}
        
          <About 
          title="About"
          onInitial={onInitial}
          />
          
          <ContentContainer
            onInitial={onInitial}
            title="Profile"
            data = {profileData}
          />
          
          <ContentContainer
            onInitial={onInitial}
            title="Education"
            data = {educationdata}
          />

          <ContentContainer
            onInitial={onInitial}
            title="Activity"
            data = {activitydata}
          />

          <ContentContainer
            onInitial={onInitial}
            title="Certificate"
            data = {certificates}
          />
        <Footer />
      </div>
    )
}

export default RightSection;
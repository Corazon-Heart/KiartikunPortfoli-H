import Contacts from "../Contacts";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = ({navbaritems,currentSection}) =>{
    return (
        <div className="px-5 mb-14 lg:mb-0 ">{/*Left*/}
      <div className='sticky top-14 px-2 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[84vh]'> {/*grid row*/}
        <Header />
        <Navbar navbaritems={navbaritems} currentSection={ currentSection } />
        <Contacts />
      </div>
    </div>
    )
}

export default LeftSection;
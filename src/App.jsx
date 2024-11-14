import { useEffect, useState } from 'react'
import './App.css'
import LeftSection from './section/LeftSection'
import RightSection from './section/RightSection'

function App() {
  const [sectionIds, setSetionIds] = useState ([]);
  const [navbaritems, setNavBarItems] = useState ([]);
  const [currentSection, setCurrentSection] = useState("");

  const addSectionIds = (sectionId) =>{
    console.log(sectionId);
     const elementId = document.getElementById(sectionId).id;
     setSetionIds((prev)=>[...new Set([ ...prev, elementId])]);

    const elemenTitle = document.getElementById(sectionId).childNodes[0].textContent
     // {title:"About", sectionId:"About-section"},
     const obj = { title: elemenTitle, sectionId:elementId }
     setNavBarItems((prev)=> {
      if (prev.findIndex(e=> e.title === obj.title ) < 0){
        return [...prev, obj]
      }
      return prev;
     });
  }

  const handleScroll = () =>{
    for (let index = 0; index < sectionIds.length; index++) {
      const el = sectionIds[index];
      const eloffsetTop = document.getElementById(el).getClientRects()[0].y; // ค่า Y
      const height = document.getElementById(el).getClientRects()[0].height * 0.5 ;
      const ViewHeight = window.innerHeight* 0.3;

      if  (eloffsetTop <= 0){
        if ((eloffsetTop +  height) > ViewHeight) {
          setCurrentSection(el)
        }
      } else if (eloffsetTop > 0 && eloffsetTop < ViewHeight) {
          setCurrentSection(el)
      }
    }
  }

  useEffect(() =>{
    if (sectionIds.length > 0){
      setCurrentSection(sectionIds[0]);
    }

  },[sectionIds])

useEffect(() => {
  window.addEventListener('scroll',handleScroll);

  return () => {
    window.removeEventListener('scroll',handleScroll);
  }
},[sectionIds])

  return (
  <div className='mt-14 mx-auto max-w-6xl grid gap-y-4 lg:grid-cols-[40%_60%]'>
    <LeftSection navbaritems={navbaritems} currentSection={currentSection} />
    <RightSection onInitial={addSectionIds} />
    </div>
  )
}

export default App

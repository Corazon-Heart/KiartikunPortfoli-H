import { useEffect } from 'react';
import { data } from '../../contents/about'

const About = ({ 
    onInitial,
    title = "",
    }) =>{

    const SECTION_ID = `${title}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    },[])

    
    return (
    <div className = 'scroll-m-14 'id={SECTION_ID}>
        <div className='space-y-5 text-2xl font-medium scroll-m-14 text-PCtitle'>{data.title}</div>
        <div>{data.description}</div>
    </div>
    )
}
export default About;
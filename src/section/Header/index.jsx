import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from '../../contents/header'
const Header = () =>{
    return (
        <div className='flex flex-col gap-2.5'>
          <div className='text-4xl font-semibold text-PCtitle '>{data.name}</div>
          <div className='text-2xl font-semibold text-PCSubcontent' >{data.scool}</div>
          <div className='w-5/6 text-sm'>{data.caption}</div>
          <div className='mt-2'>
            <a href={data.link} target='blank' >
              <span className='px-4 py-2 text-white rounded-2xl bg-PCtitle '>{data.btnText}
              <span className='inline-block ml-2 text-sm rotate-180 '><FontAwesomeIcon className='animate-bounce ' icon={faShareFromSquare} />
            </span></span>
            </a>
          </div>
        </div>
    )
}

export default Header;
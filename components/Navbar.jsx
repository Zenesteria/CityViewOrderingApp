import Image from 'next/image'
import {FaBars, FaHome, FaBook, FaPhone, FaStar} from 'react-icons/fa'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const NavBar = () => {
    const [display, setDisplay] = useState(false)
    const handleDisplay = () => {
        if(display){
            setDisplay(false)
        }
        else{
            setDisplay(true)
        }
    }
    const show = "lg:hidden z-[999] overflow-hidden  flex fixed bg-[rgb(153,43,18)] right-0 top-0 w-[65vw] max-w-[300px] h-screen transition-all duration-700"
    const hidden = 'lg:hidden z-[999] flex fixed bg-transparent right-0 top-0 w-0 max-w-[300px] h-screen transition-all duration-700'
    return(
        <div className="flex flex-col w-full h-fit items-center px-2 py-2 font-raleway border-b-[1px] border-gray-300 z-40">
            
            <div className="flex w-full h-fit items-center">

                {/* MOBILE MAIN */}
                <Link href='/' passHref>
                    <a className="lg:hidden h-fit items-center px-2 w-[20%] min-w-[200px] justify-center flex">
                        <Image src='/images/cityviewsmall.png' width='40' height='44' alt=' '/>
                        <h1 className='ml-2 xl:text-[1.3rem] font-raleway font-bold tracking-widest'>City View</h1>
                    </a>
                </Link>

                <SubNav/>
                
                
                <FaBars className={(display ? 'text-white fixed right-[5px]' : '' )+' lg:hidden ml-auto mr-4 text-[1.5rem] z-[1000] cursor-pointer transition-all duration-300'} onClick={handleDisplay}/>
                <div className={display ? show : hidden}>
                    <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full top-0 right-0 bg-[url('/images/mainbackdrop.jpg')] z-[-1] mobilebg"></div>
                    <MobileMenu innerDisplay={display ? 'flex':'hidden'}/>
                </div>
            </div>
            
                    
          

        </div>
    )
}

const NavLink = (props) => {
    const router = useRouter()
    return(
        <Link href={props.Href} passHref>
            <a className={(router.pathname === props.Href ?'active ': '') + 'flex justify-center items-center text-center h-fit my-auto tracking-[0.1rem] hover:tracking-[0.2rem] transition-all duration-300'}>
                {props.name}
            </a>
        </Link>
    )
}
const MobileNavLink = (props) => {
    const router = useRouter()
    return(
        <Link href={props.linkPath} passHref>
            <a className={(router.pathname === props.linkPath ? "bg-[#ffc3ba] text-[rgb(153,43,18)]" : "") + " flex items-center px-2 rounded-lg w-[80%] h-[6vh] m-2 hover:bg-[#ffc3ba] hover:text-[rgb(153,43,18)] transition-all duration-300"}>
                <props.iconName className='text-[1.2rem] min-w-[30px]'/>
                <h1 className='m-2'>{props.linkName}</h1>
            </a>
        </Link>
    )
}

const MobileMenu = (props) => {
    return(
        <div className={props.innerDisplay+" relative w-[80%] m-auto h-[80%] flex-col justify-around items-center text-white"}>
            
            <div className="flex flex-col  w-full h-fit">
                <h1 className=' text-white mb-4'>Pages</h1>
                <MobileNavLink
                    linkPath='/'
                    iconName={FaHome}
                    linkName='Home'
                />
                <MobileNavLink
                    linkPath='/Products'
                    iconName={FaStar}
                    linkName='Products'
                />
                <MobileNavLink
                    linkPath='/Menu'
                    iconName={FaBook}
                    linkName='Menu'
                />
                <MobileNavLink
                    linkPath='/Events'
                    iconName={BsFillCalendarEventFill}
                    linkName='Events'
                />
                <MobileNavLink
                    linkPath='/Contact'
                    iconName={FaPhone}
                    linkName='Contact'
                />
            </div>
            <div className="flex items-center  w-full h-fit">
                <div className="flex items-center w-full">
                    <Link href='/Cart'>
                        <a className=" h-fit w-full relative my-4 bg-white text-[rgb(153,43,18)] p-3 rounded-xl flex items-center justify-around">
                            <h1 className='text-[1.3rem] font-bold'>Your Order: </h1>
                            <div className="flex relative w-fit">
                                <AiOutlineShoppingCart className='text-[2rem]'/>
                                <div className="flex items-center justify-center absolute top-[-20%] right-[-25%] p-1 h-[20px] text-[15px] w-[20px] rounded-full bg-[rgb(221,74,57)] text-white font-bold">
                                    2
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const SubNav = () => {
    const router = useRouter()
    return(
        <div className="lg:flex mx-auto hidden w-[90%]">
            <div className="flex w-[70%] justify-around xl:text-[1.2rem] font-light mx-auto">
                <NavLink
                    name='Home'
                    Href='/'
                />
                <NavLink
                    name='Products'
                    Href='/Products'
                />
                <NavLink
                    name='Menu'
                    Href='/Menu'
                /> 
            </div>

            <Link href='/' passHref>
                <a className="flex flex-col h-fit items-center px-2 w-full min-w-[200px] justify-center ">
                    <Image src='/images/cityviewsmall.png' width='40' height='44' alt=' '/>
                    <h1 className='ml-2 xl:text-[1.5rem] font-raleway font-bold tracking-widest'>City View</h1>
                </a>
            </Link>

            <div className="flex w-[50%] justify-around xl:text-[1.2rem] font-light mx-auto">
                <NavLink
                    name='Events'
                    Href='/Events'
                />
                <NavLink
                    name='Contact'
                    Href='/Contact'
                />
            </div>


            <div className="flex w-[25%] justify-center">
                <Link href='/Cart'>
                    <a className=" h-fit w-fit my-auto relative">
                        <AiOutlineShoppingCart className='text-[2rem]'/>
                        <div className="flex items-center justify-center absolute top-[-20%] right-[-25%] p-1 h-[20px] text-[15px] w-[20px] rounded-full bg-[rgb(221,74,57)] text-white font-bold">
                            2
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}


export default NavBar
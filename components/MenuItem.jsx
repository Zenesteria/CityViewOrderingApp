import Link from "next/link"
import Image from "next/image"

const MenuItem = ({bgColor, img, title, shadowcolor, Href}) => {
    return(
        <Link href={Href}>
            <a>
                <div className="flex m-4 h-fit justify-center items-center p-2 md:p-4 bg-[${bgColor}] rounded-xl md:rounded-3xl flex-col hover:scale-110 transition-all duration-500" style={{backgroundColor: bgColor}}>
                    <div className="relative w-[100px] h-[50px]  sm:w-[120px] sm:h-[70px] md:w-[150px] md:h-[100px] xl:w-[200px] xl:h-[150px]" style={{filter:`drop-shadow(0 5px 30px ${shadowcolor})`}}>
                        <Image src={img} layout="fill" objectFit="contain" alt=" "/>
                    </div>
                    <h1 className="font-bold max-w-[100px] text-center text-[0.7rem] md:text-[1rem] mt-2 uppercase">{title}</h1>
                </div>
            </a>
        </Link>
    )
}

export default MenuItem;
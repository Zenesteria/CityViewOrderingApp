import Image from "next/image"
import Link from "next/link";
import Slider from 'react-slick'
import {FaArrowLeft, FaArrowRight,} from 'react-icons/fa'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="flex w-fit h-fit p-2 bg-white border-[0.5px] shadow-xl absolute right-0 md:right-[10%] top-[46%] cursor-pointer rounded-full z-30" onClick={onClick}>
        <FaArrowRight className="text-[1rem] md:text-[1.5rem] text-gray-600"/>
      </div>
    );
}
  
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <div className="flex w-fit h-fit p-2 bg-white border-[0.5px] shadow-xl absolute left-0 md:left-[10%] top-[46%] cursor-pointer rounded-full z-30" onClick={onClick}>
            <FaArrowLeft className="text-[1rem]  md:text-[1.5rem] text-gray-600 cursor-pointer"/>
        </div>
    );
}


export default function MealMenu() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
    return (
        <div className="w-[90%] mx-auto my-10 relative flex-col items-center">
            <h1 className="w-fit mb-2 mx-auto font-semibold tracking-widest text-[2rem] md:text-[2rem]">Menus</h1>
            <p className="mx-auto text-[1.1rem] w-fit mb-4">Explore our exquisite collection of top class meals</p>
            <Slider {...settings}>
                <div className="">
                    <SlideA/>
                </div>
                <div className="">
                    <SlideB/>
                </div>
            </Slider>
        </div> 
    )
}


const SlideA = () => {
    return(
        <div className="flex w-[80%] h-fit min-h-[50vh] flex-wrap p-4 mx-auto justify-around items-center min-w-[330px]">
            <MenuItem Href='/product/softdrinks' img={'/images/softdrinks.png'} title='Soft Drinks' shadowcolor={'rgba(156,45,2,0.5)'}/>
            <MenuItem Href='/product/cocktails' img={'/images/cocktails.png'} title='Juice & Cocktails' shadowcolor={'rgb(106,5,123)'}/>
            <MenuItem Href='/product/traditional-meza' img={'/images/meza.png'} title='Traditional Meza' shadowcolor={'rgb(255,228,165)'}/>
            <MenuItem Href='/product/soups/' img={'/images/soups.png'} title='Soups' shadowcolor={'rgb(243,236,129)'}/>
            <MenuItem Href='/product/rice-and-spaghetti' img={'/images/riceandspag.png'} title='Rice & Spaghetti' shadowcolor={'rgb(235,235,195)'}/>
            <MenuItem Href='/product/salads' img={'/images/salad.png'} title='Salads' shadowcolor='rgba(49,67,50,0.5)'/>
            
        </div>
    )
}

const SlideB = () => {
    return(
        <div className="flex w-[70%] h-fit min-h-[50vh] flex-wrap p-4 mx-auto justify-center items-center min-w-[330px]">
            <MenuItem Href='/product/burgers-and-sandwiches' img={'/images/burger.png'} title='Burgers & Sandwiches' shadowcolor='rgb(233,121,49)'/>
            <MenuItem Href='/product/coffee' img={'/images/coffee.png'} title='Hot Drinks' shadowcolor={'rgba(156,45,2,0.5)'}/>
            <MenuItem Href='/product/meat-dishes' img={'/images/steak.png'} title='Meat Dishes' shadowcolor={'rgb(85,34,3)'}/>
            <MenuItem Href='/product/seafood' img={'/images/seafood.png'} title='Seafood Dishes' shadowcolor={'rgb(255,228,165)'}/>
            <MenuItem Href='/product/bbq' img={'/images/bbq.png'} title='Barbeque' shadowcolor={'rgb(243,236,129)'}/>
            <MenuItem Href='/product/chicken-dishes' img={'/images/chicken.png'} title='Chicken Dishes' shadowcolor={'rgb(235,235,195)'}/>

            
        </div>
    )
}

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

import Slider from "react-slick";
import Link from "next/link";

//Sub - Components
import { Slide } from "./Slide";

export default function ItemSlider({CarouselData}) {
    // SLIDER SETTINGS
    const settings = {
        arrows:false,
        dots: false,
        fade: true,
        autoplay:true,
        autoplayspeed:1000,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
  return (
    <div className=" w-full h-fit mx-auto relative">

        {/* TEXT OVERLAY */}
        <div className="flex h-full w-full z-40 absolute p-4">
            <div className="flex flex-col h-full justify-center w-[87%] ml-auto text-white min-w-[330px]">
                <h1 className="text-[2rem] sm:text-[3rem] font-bold">{CarouselData.title.split('/')[0]} <br /> {CarouselData.title.split('/')[1]}</h1>
                <p className="max-w-[350px] my-4">{CarouselData.caption}</p>
                <Link href='/'>
                    <a className="bg-yellow-300 text-black hover:bg-orange-400 rounded-full py-3 w-fit px-10 font-bold text-[1.1rem] my-4">
                    Place Order
                    </a>
                </Link> 
            </div>
        </div>

        {/* IMAGE SLIDER */}
        <Slider {...settings}>
            {CarouselData.images.map((img) => {
                return(
                    <Slide key='Slides' bg={img}/>
                )
            })}
        </Slider>

    </div>
  );
}



import Slider from "react-slick";
import Product from "./Product";
import ProductDisplay from './ProductDisplay'
// import Products from "../data/Products";
import {FaArrowLeft, FaArrowRight,} from 'react-icons/fa'
import {BsFillLightningFill} from 'react-icons/bs'
import {slidercontentdata} from "../data/MainSiteData";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="flex w-fit h-fit p-2 bg-white border-[0.5px] shadow-xl absolute right-[-20px] top-[50%] cursor-pointer rounded-full z-50" onClick={onClick}>
        <FaArrowRight className="text-[1.5rem] text-gray-600"/>
      </div>
    );
}
  
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <div className="flex w-fit h-fit p-2 bg-white border-[0.5px] shadow-xl absolute left-[-20px] top-[50%] cursor-pointer rounded-full z-50" onClick={onClick}>
            <FaArrowLeft className="text-[1.5rem] text-gray-600 cursor-pointer"/>
        </div>
    );
}

// const featuredProducts = Products.filter((data) => {
//   return data.Featured
// })

// const dislayProducts = Products.filter((data) => {
//   return data.id < 11 && !data.Featured
// })

export default function ItemSlider({featured, soups}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                initialSlide: 1
              }
            },
          ]
      };
  return (
      <div className="relative flex flex-col w-[95vw] items-center justify-center overflow-hidden mt-5 mx-auto">
          <h1 className="text-[2.5rem] text-center">{slidercontentdata.heading}</h1>
          <p className="text-[1.2rem] text-center">
            {slidercontentdata.caption.split('$')[0]} 
            <strike>${slidercontentdata.caption.split('$')[1]}</strike>
            <strong className="text-green-700">${slidercontentdata.caption.split('$')[2].split(' ')[0]}</strong>
            {slidercontentdata.caption.split('$')[2].split('9')[2]}
          </p>

          {/* ITEM SLIDER */}
          <div className="w-[90%] mx-auto relative">
            <Slider {...settings}>
                {featured.map((data) => {
                    return(
                        <div key={data._id}>
                            <Product
                                image={`url('${data.img}')`}
                                status={data.desc}
                                title={data.title}
                                tags={data.desc}
                                price={data.prices}
                            />
                        </div>
                    )
                })}
            </Slider>
          </div>    
      </div>
  );
}






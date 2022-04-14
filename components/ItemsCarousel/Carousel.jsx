
//Modules
import Slider from "react-slick";

//Sub-Components
import Product from "./Slide";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import {slidercontentdata} from "../../data/MainSiteData";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="flex w-fit h-fit p-2 bg-white border-[1px] absolute right-[-5%] top-[50%] cursor-pointer rounded-full z-50 hover:bg-[rgb(179,57,19)] transition-all duration-300 group" onClick={onClick}>
      <AiOutlineRight className="text-[1.5rem] text-gray-600 hover:text-white transition-all duration-300"/>
    </div>
  );
}
function SamplePrevArrow(props) {
  const {onClick} = props;
  return (
      <div className="flex w-fit h-fit p-2 bg-white border-[1px] absolute left-[-5%] top-[50%] cursor-pointer rounded-full z-50 hover:bg-[rgb(179,57,19)] transition-all duration-300 group" onClick={onClick}>
          <AiOutlineLeft className="text-[1.5rem] text-gray-600 hover:text-white transition-all duration-300"/>
      </div>
  );
}


export default function ItemSlider({featured}) {
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
                                id = {data._id}
                                image={`url('${data.img}')`}
                                status={data.desc}
                                title={data.title}
                                tags={data.desc}
                                price={data.price}
                            />
                        </div>
                    )
                })}
            </Slider>
          </div>

      </div>
  );
}






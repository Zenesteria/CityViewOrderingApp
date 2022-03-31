import Slider from "react-slick";
import Products from "../data/Products";
import {FaArrowLeft, FaArrowRight,} from 'react-icons/fa'
import {BsFillLightningFill} from 'react-icons/bs'
import {slidercontentdata} from "../data/MainSiteData";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="flex w-fit h-fit p-2 bg-white border-[0.5px] shadow-xl absolute right-[-20px] top-[50%] cursor-pointer rounded-full z-30" onClick={onClick}>
        <FaArrowRight className="text-[1.5rem] text-gray-600"/>
      </div>
    );
}
  
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <div className="flex w-fit h-fit p-2 bg-white border-[0.5px] shadow-xl absolute left-[-20px] top-[50%] cursor-pointer rounded-full z-30" onClick={onClick}>
            <FaArrowLeft className="text-[1.5rem] text-gray-600 cursor-pointer"/>
        </div>
    );
}

const featuredProducts = Products.filter((data) => {
  return data.Featured
})

const dislayProducts = Products.filter((data) => {
  return data.id < 11 && !data.Featured
})

export default function ItemSlider() {
    const settings = {
        dots: false,
        infinite: false,
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
      <div className="relative flex flex-col w-[95vw] items-center justify-center overflow-hidden my-10 mx-auto">
          <h1 className="text-[2.5rem] text-center">{slidercontentdata.heading}</h1>
          <p className="text-[1.2rem] text-center">
            {slidercontentdata.caption.split('$')[0]} 
            <strike>${slidercontentdata.caption.split('$')[1]}</strike>
            <strong className="text-green-700">${slidercontentdata.caption.split('$')[2].split(' ')[0]}</strong>
            {slidercontentdata.caption.split('$')[2].split('9')[2]}
          </p>

          {/* ITEM SLIDER */}
          <div className="w-[90%] mx-auto my-10 relative">
            <Slider {...settings}>
                {featuredProducts.map((data) => {
                    return(
                        <div key={data.id}>
                            <Product
                                image={`url('${data.productImages[0]}')`}
                                status={data.productStatus}
                                title={data.productTitle}
                                tags={data.productTags}
                                quantity={data.productPrice}
                            />
                        </div>
                    )
                })}
            </Slider>
          </div>

          <h1 className="text-[1.5rem] font-bold">Mouth Watering Delights</h1>

          <div className="flex w-full flex-wrap h-fit min-h-[50vh] items-center justify-center">
              {dislayProducts.map((data) => {
                return(
                            <ProductDisplay
                                key={data.id}
                                image={`url('${data.productImage}')`}
                                status={data.productStatus}
                                title={data.productTitle}
                                tags={data.productTags}
                                quantity={data.productPrice}
                            />
                    )
              })}
          </div>       
      </div>
  );
}

const Product = (props) => {
    return(
        <div className="flex flex-col w-[90%] min-h-[45vh] h-fit mx-auto my-4 min-w-[300px] max-w-[350px]">
            <div className="flex w-full h-[25vh] bg-cover bg-center bg-no-repeat" style={{backgroundImage:props.image}}>

            </div>
            <div className="flex flex-col w-full h-[40%] bg-white p-2">
                <p className="flex text-[1rem] items-center mb-2"><BsFillLightningFill className="text-red-600"/>{props.status}</p>
                <h1 className="text-[1.25rem] mb-2">{props.title}</h1>
                <p className="text-gray-400">{props.tags}</p>
                <p>{props.quantity}</p>
            </div>
        </div>
    )
}
const ProductDisplay = (props) => {
    return(
        <div className="flex cursor-pointer flex-col items-center text-center w-[90%] h-fit mx-10 my-10 min-w-[300px] max-w-[350px] group">
            <div className="flex w-[150px] h-[150px] rounded-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-all duration-700 ease-in-out" style={{backgroundImage:props.image}}>

            </div>
            <div className="flex flex-col items-center w-[90%] p-2">
                <p className="flex justify-center text-[0.8rem] items-center mb-2"><BsFillLightningFill className="text-red-600"/>{props.status}</p>
                <h1 className="text-[1rem] mb-2">{props.title}</h1>
                <p className="text-gray-400 text-[0.8rem]">{props.tags}</p>
                <p>{props.quantity}</p>
            </div>
        </div>
    )
}
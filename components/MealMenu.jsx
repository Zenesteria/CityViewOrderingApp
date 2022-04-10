import MenuItem from './MenuItem';
import Slider from 'react-slick'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="flex w-fit h-fit p-2 bg-white border-[1px] absolute right-[5%] top-[50%] cursor-pointer rounded-full z-50 hover:bg-[rgb(179,57,19)] transition-all duration-300 group" onClick={onClick}>
        <AiOutlineRight className="text-[1.5rem] text-gray-600 hover:text-white transition-all duration-300"/>
      </div>
    );
}
  
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <div className="flex w-fit h-fit p-2 bg-white border-[1px] absolute left-[5%] top-[50%] cursor-pointer rounded-full z-50 hover:bg-[rgb(179,57,19)] transition-all duration-300 group" onClick={onClick}>
            <AiOutlineLeft className="text-[1.5rem] text-gray-600 hover:text-white transition-all duration-300"/>
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
            <p className=" text-center sm:text-left mx-auto text-[1.1rem] w-fit mb-4">Explore our exquisite collection of top class meals</p>
            <Slider {...settings}>
                <div className="">
                    <SlideA/>
                </div>
                {/* <div className="">
                    <SlideB/>
                </div> */}
            </Slider>
        </div> 
    )
}


const SlideA = () => {
    return(
        <div className="flex w-[80%] h-fit min-h-[50vh] flex-wrap p-4 mx-auto justify-around items-center min-w-[330px]">
            <MenuItem Href='/product/soft-drinks' img={'/images/softdrinks.png'} title='Soft Drinks' shadowcolor={'rgba(156,45,2,0.5)'}/>
            <MenuItem Href='/product/cocktails' img={'/images/cocktails.png'} title='Juice & Cocktails' shadowcolor={'rgb(106,5,123)'}/>
            <MenuItem Href='/product/traditional-meza' img={'/images/meza.png'} title='Traditional Meza' shadowcolor={'rgb(255,228,165)'}/>
            {/* <MenuItem Href='/product/soups/' img={'/images/soups.png'} title='Soups' shadowcolor={'rgb(243,236,129)'}/>
            <MenuItem Href='/product/rice-and-spaghetti' img={'/images/riceandspag.png'} title='Rice & Spaghetti' shadowcolor={'rgb(235,235,195)'}/>
            <MenuItem Href='/product/salads' img={'/images/salad.png'} title='Salads' shadowcolor='rgba(49,67,50,0.5)'/> */}
        </div>
    )
}

// const SlideB = () => {
//     return(
//         <div className="flex w-[70%] h-fit min-h-[50vh] flex-wrap p-4 mx-auto justify-center items-center min-w-[330px]">
//             <MenuItem Href='/product/burgers-and-sandwiches' img={'/images/burger.png'} title='Burgers & Sandwiches' shadowcolor='rgb(233,121,49)'/>
//             <MenuItem Href='/product/coffee' img={'/images/coffee.png'} title='Hot Drinks' shadowcolor={'rgba(156,45,2,0.5)'}/>
//             <MenuItem Href='/product/meat-dishes' img={'/images/steak.png'} title='Meat Dishes' shadowcolor={'rgb(85,34,3)'}/>
//             <MenuItem Href='/product/seafood' img={'/images/seafood.png'} title='Seafood Dishes' shadowcolor={'rgb(255,228,165)'}/>
//             <MenuItem Href='/product/bbq' img={'/images/bbq.png'} title='Barbeque' shadowcolor={'rgb(243,236,129)'}/>
//             <MenuItem Href='/product/chicken-dishes' img={'/images/chicken.png'} title='Chicken Dishes' shadowcolor={'rgb(235,235,195)'}/>

            
//         </div>
//     )
// }


import Carousel from '../../../components/Carousel'
import { CarouselData } from "../../../data/MainSiteData";
import ProductDisplay from '../../../components/ProductDisplay';
import axios from 'axios'



export default function SoupsPage({soupsdata}) {
  return (
    <div className="flex w-full h-fit flex-col">
        <div className="flex w-full h-[50vh] relative justify-center items-center">
            <div className="absolute w-full h-full top-0 right-0 bg-cover bg-center bg-no-repeat darken z-[-1]" style={{backgroundImage: `url('${soupsdata[0].img}')`}}></div>
            <h1 className='text-[4rem] text-white font-bold'>City View Soups</h1>
        </div>
        <div className="flex w-full flex-wrap p-5 items-center">
            {soupsdata.map((soup) => {
                return(
                    <ProductDisplay key={soup._id} data={soup}/>
                )
            })}
        </div>
    </div>
  )
}




export const getServerSideProps = async() => {
    const res = await axios.get('http://localhost:3000/api/Products/soups')
    return{
        props:{
            soupsdata:res.data
        }
    }
}

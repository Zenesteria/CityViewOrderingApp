import ProductDisplay from '../../../components/ProductDisplay';
import axios from 'axios'



export default function SoupsPage({drinksdata}) {
  return (
    <div className="flex w-full h-fit flex-col">
        <div className="flex w-full h-[50vh] relative justify-center items-center p-5">
            <div className="absolute w-full h-full top-0 right-0 bg-cover bg-center bg-no-repeat darken z-[-1]" style={{backgroundImage: `url('${drinksdata[0].imgs[0]}')`}}></div>
            <h1 className='text-[4rem] text-white font-bold'>City View Soft Drinks</h1>
        </div>
        <div className="flex w-full flex-wrap p-5 items-center">
            {drinksdata.map((drink) => {
                return(
                    <ProductDisplay key={drink._id} data={drink} path={'/product/soft-drinks/'}/>
                )
            })}
        </div>
    </div>
  )
}




export const getServerSideProps = async() => {
    const res = await axios.get('http://localhost:3000/api/Products/softdrinks')
    return{
        props:{
            drinksdata:res.data
        }
    }
}

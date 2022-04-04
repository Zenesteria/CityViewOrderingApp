import ProductDisplay from '../../../components/ProductDisplay';
import axios from 'axios'



export default function SoupsPage({mezadata}) {
  return (
    <div className="flex w-full h-fit flex-col">
        <div className="flex w-full h-[50vh] relative justify-center items-center p-5">
            <div className="absolute w-full h-full top-0 right-0 bg-cover bg-center bg-no-repeat darken z-[-1]" style={{backgroundImage: `url('${mezadata[0].imgs[0]}')`}}></div>
            <h1 className='text-[4rem] text-white font-bold'>City View Traditional Meza</h1>
        </div>
        <div className="flex w-full flex-wrap p-5 items-center">
            {mezadata.map((meza) => {
                return(
                    <ProductDisplay key={meza._id} data={meza} path={'/product/traditional-meza/'}/>
                )
            })}
        </div>
    </div>
  )
}




export const getServerSideProps = async() => {
    const res = await axios.get('http://localhost:3000/api/Products/meza')
    return{
        props:{
            mezadata:res.data
        }
    }
}

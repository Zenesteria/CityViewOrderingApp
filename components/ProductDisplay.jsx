import {BsFillLightningFill} from 'react-icons/bs'
import Link from 'next/link';

const ProductDisplay = ({data}) => {
    return(
        <Link href={`/product/soups/${data._id}`}>
            <a className="flex cursor-pointer border-2 rounded-xl flex-col items-center text-center w-fit h-fit mx-auto my-4 min-w-[300px] max-w-[350px] group p-5">
                <div className="flex mb-4 w-[150px] h-[150px] rounded-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-all duration-700 ease-in-out" style={{backgroundImage:`url('${data.imgs[0]}')`}}>

                </div>
                <div className="flex flex-col items-center w-fit p-2">
                    <p className="flex justify-center font-semibold text-[0.8rem] items-center mb-2"><BsFillLightningFill className="text-red-600"/>{data.status === '1' ? 'Fresh and Ready' : 'N/A'}</p>
                    <h1 className="text-[1rem] mb-2 group-hover:underline">{data.title}</h1>
                    <p className="text-gray-400 text-[0.8rem]">{data.desc}</p>
                    <p className='text-[1.1rem] font-bold'>{`₦${data.prices[0]}`}</p>
                </div>
            </a>
        </Link>
    )
}



export default ProductDisplay;
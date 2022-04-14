import {BsFillLightningFill} from 'react-icons/bs'

const Product = (props) => {
    return(
            <div className="flex flex-col w-[90%] min-h-[45vh] h-fit mx-auto my-4 min-w-[300px] max-w-[350px]">
                <div className="flex w-full h-[25vh] bg-cover bg-center bg-no-repeat" style={{backgroundImage:props.image}}>

                </div>
                <div className="flex flex-col w-full h-[40%] bg-white p-2">
                    <p className="flex text-[1rem] items-center mb-2"><BsFillLightningFill className="text-red-600"/>{props.status}</p>
                    <h1 className="text-[1.25rem] mb-2">{props.title}</h1>
                    <p className="text-gray-400">{props.tags}</p>
                    <p>{props.price}</p>
                </div>
            </div>
    )
}


export default Product;
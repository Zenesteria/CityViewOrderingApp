import { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import {MdFastfood} from 'react-icons/md'
// import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {addProduct} from '../redux/cartSlice';










const Product = ({product}) => {
    useEffect(() => {
      console.log(quantity);
    })

    //STATES

    const [size, setSize] = useState(0)
    const [price, setPrice] = useState(product.prices[0]);
    // const [subTotal, setSubTotal] = useState(0);
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart);



    const [actSize, setActSize] = useState({
      large: false,
      regular: true
    });
  
    const [currentDisplayBg, setCurrentDisplayBg] = useState(`url('${product.imgs[0]}')`);
    const [quantity,setQuantity] = useState({
      Large: 0,
      Regular: 0,
      qty: 0
    });

  const router = useRouter();

  const handlePrice = (value) => {
    setPrice(price + value);
    console.log(price)
  }

  const handleTempBg = (e) => {
    const targetBg = e.target.style.backgroundImage
    setCurrentDisplayBg(targetBg) 
  }

  const handleAddToCart = () => {
    // dispatch all values you wish to pass through to the cart
    const subTotal = quantity.qty * price;
    if(quantity.Total <= 0 ){
      alert('please select an amount')
    }
    else{
      dispatch(addProduct({...product, price, ...quantity, size, subTotal}));
    }
  }

  const handleActSize = (e, val) => {
      setActSize(() => {
        if(val === 0 ){
          console.log('regular')
          const diff = product.prices[val] - product.prices[size]
          setSize(val)
          handlePrice(diff)
          return {
            large: false,
            regular: true
          }
        }
        else if(val === 1){
          console.log('large')
          const diff = product.prices[val] - product.prices[size]
          setSize(val)
          handlePrice(diff)
          return {
            large: true,
            regular: false
          }
        }
      })
  }

  const handleAmountChange = (e) => {
    setQuantity((prev) => {
      let large;
      let reg;
      let totalval;
      if(actSize.regular){
        reg = parseInt(e.target.value === '' ? 0 : e.target.value);
        large = parseInt(prev.Large);
        totalval = reg + large;
        return{
          Large: large,
          Regular: reg,
          qty: totalval
        }
      }
      else if(actSize.large){
        large = parseInt(e.target.value === '' ? 0 : e.target.value);
        reg = parseInt(prev.Regular);
        totalval = reg + large;
        return{
          Large: large,
          Regular: reg,
          qty: totalval
        }
      }
    });
    
    
  }






 

  return(
    <div className="flex w-full items-center justify-center min-h-[85vh] h-fit">
      <div className="flex flex-col w-[80%] min-h-[70vh] h-fit bg-white pt-10">
        <div className="flex p-2 w-full h-fit">
          <h1>{router.pathname}</h1>
        </div>
        <div className="flex w-full min-h-[80vh] justify-center h-fit ml-auto flex-wrap">
          <div className="flex flex-col h-[80vh] max-h-[1000px] min-w-[360px] p-4 flex-[0.7]">
            <div className="bg-center bg-cover min-w-[330px] bg-no-repeat w-full h-[80%] transition-all duration-500 ease-in-out" style={{backgroundImage: currentDisplayBg}}></div>
            <div className="flex w-full h-[15%] items-center justify-center">
              <DisplayButton bg={`url('${product.imgs[0]}')`} mouseOver={handleTempBg}/>
              <DisplayButton bg={`url('${product.imgs[1]}')`} mouseOver={handleTempBg}/>
            </div>
          </div>
          <div className="flex flex-col p-4 h-full min-w-[300px] flex-[1]">
            <h1 className='text-[2rem] font-bold mb-2'>{product.title}</h1>
            <p className='text-[1.2rem] font-semibold italic mb-2'>Category: {product.category}</p>
            {/* <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <BsStarFill className='min-w-[15px] z-10'/>
                </div>
                <Link href='/' passHref>
                  <a className=' underline text-gray-700'>View Ratings</a>
                </Link>
            </div> */}
            <div className="flex w-full h-fit my-4 flex-col">
                <h1>Description: </h1>
                <p className='max-w-[450px]'>
                  {product.desc}
                </p>
            </div>
            <div className="flex items-center w-[80%] flex-wrap">
              <h1 className='text-[1.2rem] text-gray-500'>Highlights: </h1>
              {product.tags.map((tag,i) => {
                  return(
                      <p className='font-bold mr-2' key={i}>{tag}{product.tags.length === i+1 ? '' : ','}</p>
                  )
              })}
            </div>
            <div className="flex mt-7 items-end">
                {product.prices.map((price, index) => {
                  return <SizeBtn txt={index === 0 ? 'regular' : index === 1 ? 'large' : ''} key={index} val={index} callBack={handleActSize} act={index === 0 ? actSize.regular && true : index === 1 ? actSize.large && true : null}/>
                })}
            </div>
            <div className="flex flex-col w-fit my-4 p-2">
                <p className='font-bold text-[1.5rem]'>{`₦${price}.00`}</p>
                <div className="flex h-fit w-fit my-2">
                  <input type="text" value={actSize.large ? quantity.Large : actSize.regular ? quantity.Regular : null} className='border-2 w-[70px]' onChange={handleAmountChange}/>
                  <button className='mx-2 text-white bg-[rgb(153,43,17)] p-2 hover:bg-[rgb(119,35,13)] transition-all duration-300' onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DisplayButton = (props) => {
  return(
    <div className="bg-center mx-2 bg-cover bg-no-repeat h-[30px] w-[30px] border-[0.5px] border-transparent transition-all duration-500 ease-in-out hover:border-gray-500 hover:opacity-100 hover:scale-125 group" style={{backgroundImage: props.bg}} onMouseOver={props.mouseOver}></div>
  )
}

const SizeBtn = ({txt, val, callBack, act}) => {
  return(
      <div className="flex flex-col mx-4 items-center justify-end hover:text-[rgb(188,98,62)] group" style={act ? {color: 'rgb(188,98,62)' , fontWeight: 'bold'} : {}} onClick={(e) => callBack(e, val)}>
          <MdFastfood className={`text-[${txt === 'large' ? '3rem' : txt === 'regular' ?  '1.5rem' : '' }] group-hover:scale-110  transition-all duration-300`}/>
          <h1 className='group-hover:font-bold transition-all duration-300'>{txt}</h1>
      </div>
  )
}



export default Product

import {BsNewspaper, BsFillPatchCheckFill} from 'react-icons/bs';


const Order = () => {
  return (
    <div className="flex justify-center items-center w-full h-fit min-h-[80vh] bg-[rgb(153,43,17)]">
      <div className="flex p-5 w-[70%] h-[70vh] bg-white rounded-xl shadow-2xl flex-col items-center min-w-[330px]">
        <p className="text-[1.2rem] text-gray-400 font-bold">Order ID:</p>
        <h1 className="text-[1.8rem] lg:text-[2rem] xl:text-[2.5rem] tracking-wide font-bold mb-4">123-AJK-345-109</h1>
        <div className="flex w-[90%] min-w-[330px] justify-around p-4">
          <div className="flex flex-col">
            <h1 className='text-[0.9rem] sm:text-[1.1rem] font-bold'>Customer</h1>
            <p className='max-w-[100px] text-[0.8rem] sm:text-[1rem] text-gray-700'>John Dalton</p>
          </div>
          <div className="flex flex-col">
            <h1 className='text-[0.9rem] sm:text-[1.1rem] font-bold'>Address</h1>
            <p className='max-w-[100px] text-[0.7rem] sm:text-[0.8rem] text-gray-700'>Dunukofia St. 212-33 NG</p>
          </div>
          <div className="flex flex-col">
            <h1 className='text-[0.9rem] sm:text-[1.1rem] font-bold'>Total</h1>
            <p className='max-w-[100px] text-[1.1rem] text-gray-700 font-semibold'>$0.00</p>
          </div>
        </div>
        <div className="flex w-[75%] min-w-[330px] h-[50%] items-center justify-between p-5 text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-gray-300 flex-wrap">
          <ProgressIcon
            iconName={BsNewspaper}
            txt='Payment'
            isActive={true}
          />
          <ProgressIcon
            iconName={BsNewspaper}
            txt='Payment'
            isPending={true}
          />
          <ProgressIcon
            iconName={BsNewspaper}
            txt='Payment'
          />
          <ProgressIcon
            iconName={BsNewspaper}
            txt='Payment'
          />
        </div>
      </div>
    </div>
  )
}


const ProgressIcon = (props) => {
  return(
    <div className={(props.isActive ? "activeProgress": "") + ((props.isPending ? "pending": "")+ " flex flex-col items-center m-4 min-w-[100px]")}>
      <props.iconName />
      <p className='text-[1rem] xl:text-[1.2rem] my-2 text-black'>{props.txt}</p>
      <BsFillPatchCheckFill className='text-[1.5rem] xl:text-[2rem] text-green-700'/>
    </div>
  )
}

export default Order

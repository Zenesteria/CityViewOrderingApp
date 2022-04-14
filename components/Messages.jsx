import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function Messages() {
    const msg = useSelector(state => state.msg);
    const [display, setDisplay] = useState(true)
    if(msg.Messages.length > 0){
        if(msg.Messages[0].msgInfo.type === 'success'){
            return(
                <div className="w-fit bg-green-200 font-raleway text-green-500 font-semibold py-2 px-4 mx-2 relative group fadeOut">
                    <p>{msg.Messages[0].msgInfo.msg}</p>
                    <AiOutlineClose className='hidden cursor-pointer text-[1rem] absolute top-0 right-0 text-black group-hover:inline'/>
                </div>
            )
        }
        else if(msg.Messages[0].msgInfo.type === 'error'){
            return(
                <div className="w-fit bg-red-100 font-raleway text-red-500 font-semibold py-2 px-4 mx-2 relative group">
                    <p>{msg.Messages[0].msgInfo.msg}</p>
                    <AiOutlineClose className='hidden cursor-pointer text-[1rem] absolute top-0 right-0 text-black group-hover:inline'/>
                </div>
            )
        }
    }
    
    else{
        return(
            <div className="flex h-[40px] bg-blue-300"></div>
        )
    }
}


//REACT-ICONS
import {FaHeart} from "react-icons/fa"

//Sub-Components
import { FeedbackMsg } from "./msg"




export default function Feedback({feedbackdata}){
    return(
        <div className="flex flex-col w-full h-fit min-h-[50vh] p-10 item">
            {/* HEADER */}
            <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[3rem] font-bold flex">
                Customers
                <FaHeart className="text-[#91200F] min-w-[30px] mx-2"/>
                City View
            </h1>

            <hr className="border-black my-10" />

            {/* FEEDBACK MESSAGES */}
            <div className="flex w-[90%] mx-auto flex-wrap  justify-center items-center md:justify-between">
                {feedbackdata.map((data) => {
                    return(
                        <FeedbackMsg
                            key={data._id}
                            msg={data.msg}
                            customer={data.customer}
                            location={data.location}
                        />
                    )
                })}
            </div>

        </div>
    )
}



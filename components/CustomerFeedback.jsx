import { CustomerFeedbackData } from "../data/MainSiteData"
import {FaHeart} from "react-icons/fa"

const FeebackMessages = CustomerFeedbackData.feedback


export default function Feedback({feedbackdata}){
    return(
        <div className="flex flex-col w-full h-fit min-h-[50vh] p-10 item">
            <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[3rem] font-bold flex">
                {CustomerFeedbackData.title.split("/")[0]}
                <FaHeart className="text-[#91200F] min-w-[30px] mx-2"/>
                {CustomerFeedbackData.title.split("/")[1]}
            </h1>
            <hr className="border-black my-10" />
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


const FeedbackMsg = (props) => {
    return(
        <div className="flex w-fit h-fit min-w-[300px] flex-col m-4">
            <p className="relative italic max-w-[350px] text-[1.1rem] p-5">
                <span className="text-[#91200F] text-[3rem] absolute top-0 left-0 italic">{'"'}</span>
                {props.msg}
            </p>
            <p className="px-5 text-gray-400">{props.customer} - {props.location}</p>
        </div>
    )
}
export const FeedbackMsg = (props) => {
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
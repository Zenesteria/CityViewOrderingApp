import Image from "next/image"
import {SubShowcaseData} from "../data/MainSiteData"

const showcases = SubShowcaseData.showcases

export default function SubShowcase(){
    return(
        <div className="flex w-full min-h-[30vh] items-center justify-center my-10 flex-wrap">
            {showcases.map((data) => {
                return(
                    <SubItem
                        key={data.id}
                        backdrop={data.bg}
                        title={data.heading}
                        caption={data.caption}
                    />
                )
            })}
        </div>
    )
}


const SubItem = (props) => {
    return(
        <div className="flex w-fit flex-col p-2 items-center justify-center text-center mx-4 min-w-[300px]">
            <Image src={props.backdrop} width='100' height="100" alt="subimg"/>
            <h1 className="font-bold text-[1.3rem] my-2">{props.title}</h1>
            <p className="max-w-[300px] text-[1rem]">{props.caption}</p>
        </div>
    )
}
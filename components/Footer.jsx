import { FooterData } from "../data/MainSiteData"

export default function Footer(){
    return(
        <div className="flex w-full flex-col border-t-[0.5px] border-gray-400 min-h-[10vh] h-fit p-4 text-[0.8rem] text-center justify-center items-center">
            {FooterData.map((data, index) => {
                return(
                    <p key={index}>{data}</p>
                )
            })}
        </div>
    )
}
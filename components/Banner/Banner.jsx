//Site Data
import {Banners,SiteData} from "../../data/MainSiteData";

//Sub-Components
import { BannerImg } from "./BannerImg";

//Select The First Banner Data
const BannerData = Banners.banners[0]
const BannerImages = BannerData.images

//Color Data
const themeData = SiteData.themeAccent



export default function Banner (){
    return(
        <div className={`flex w-full h-fit min-h-[55vh] justify-center items-center my-10 flex-wrap`} style={{backgroundColor:themeData}}>
            <div className="flex w-fit h-fit justify-center items-center flex-wrap">
                <div className="flex w-full lg:w-fit h-fit min-w-[300px]">
                    <BannerImg bg={BannerImages[0]}/>
                    <BannerImg bg={BannerImages[1]}/>
                </div>
                <div className="p-4 flex flex-col items-center justify-center text-center flex-1 min-w-[300px]">
                    <h1 className="font-bold text-[2rem] sm:text-[2.5rem]">{BannerData.title}</h1>
                    <p className="font-light text-[1.1rem] my-4 max-w-[250px]">{BannerData.caption}</p>
                </div>
                <div className="flex w-full sm:w-fit h-fit min-w-[300px]">
                    <BannerImg bg={BannerImages[2]}/>
                    <BannerImg bg={BannerImages[3]}/>
                </div>
            </div>
        </div>
    )
}




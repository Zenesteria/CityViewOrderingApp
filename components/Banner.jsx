import {Banners,SiteData} from "../data/MainSiteData"

const BannerData = Banners.banners[0]
const BannerImages = BannerData.images
const themeData = SiteData.themeAccent

export default function Banner (){
    return(
        <div className={`flex w-full h-fit min-h-[55vh] justify-center items-center my-10 flex-wrap`} style={{backgroundColor:themeData}}>
            <div className="flex w-fit h-fit justify-center items-center flex-wrap">
                <div className="flex w-full lg:w-fit h-fit min-w-[300px]">
                    <BannerElement bg={BannerImages[0]}/>
                    <BannerElement bg={BannerImages[1]}/>
                </div>
                <div className="p-4 flex flex-col items-center justify-center text-center flex-1 min-w-[300px]">
                    <h1 className="font-bold text-[2rem] sm:text-[2.5rem]">{BannerData.title}</h1>
                    <p className="font-light text-[1.1rem] my-4 max-w-[250px]">{BannerData.caption}</p>
                </div>
                <div className="flex w-full sm:w-fit h-fit min-w-[300px]">
                    <BannerElement bg={BannerImages[2]}/>
                    <BannerElement bg={BannerImages[3]}/>
                </div>
            </div>
        </div>
    )
}



const BannerElement = (props) => {
    return(
        <div className="flex flex-[0.5] h-[50vh] bg-cover bg-center bg-no-repeat min-w-[150px]" style={{backgroundImage: props.bg}}></div>
    )
}
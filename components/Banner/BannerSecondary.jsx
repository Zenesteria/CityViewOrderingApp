import { Banners,SiteData } from "../../data/MainSiteData"
import Link from "next/link"

const BannerData = Banners.banners[1]
const themeData = SiteData.themeAccent;

export default function BannerSecondary (){
    return(
        <div className={`flex w-full h-fit min-h-[50vh] items-center justify-center mt-10 p-10`} style={{backgroundColor: themeData}}>
            <div className="flex w-[80%] h-fit min-h-[50vh] flex-wrap justify-center items-center">
                <div className="flex flex-col min-w-[330px] text-center sm:text-left flex-[0.5] p-10  h-[50vh] justify-center">
                    <h1 className="text-[2.5rem] font-bold mb-4">{BannerData.title}</h1>
                    <p className="text-[1.1rem] my-4 max-w-[400px]">{BannerData.caption}</p>
                </div>
                <div className="flex flex-col flex-[0.25] px-4 h-full mx-2 my-10 min-w-[180px]">
                    {BannerData.bannerLinks.map((data) => {
                        return(
                            <Link key={data.Name} href={data.link} passHref>
                                <a className="mb-2 text-[1.1rem]">{">"+data.Name}</a>
                            </Link>
                        )
                    })}
                </div>
                <div className="flex flex-[0.7] min-w-[300px] h-fit">
                    <div className="bg-center h-[40vh] my-auto bg-cover bg-no-repeat mx-2 flex-[0.6]" style={{backgroundImage:BannerData.images[0]}}></div>
                    <div className="flex flex-col flex-[0.5] p-2">
                        <div className="bg-center w-full h-[30vh] mb-2" style={{backgroundImage:BannerData.images[1]}}></div>
                        <div className="bg-center w-full h-[30vh]" style={{backgroundImage:BannerData.images[2]}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
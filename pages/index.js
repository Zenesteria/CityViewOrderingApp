import axios from 'axios'
import Head from 'next/head'
// import Featured from '../components/Featured'
import { CarouselData } from "../data/MainSiteData";
import Carousel from '../components/Carousel'
import Meals from '../components/Meals'
import MealMenu from '../components/MealMenu'
import SubShowcase from '../components/SubShowcase'
import Banner from '../components/Banner'
import CustomerFeedback from '../components/CustomerFeedback'
import BannerSecondary from '../components/BannerSecondary'


export default function Home({featured, feedbacks}) {

  return (
    <div className='flex flex-col w-full font-raleway'>
      <Head>
        <title>City View - Abuja</title>
        <meta name="description" content="Best City Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel CarouselData={CarouselData}/>
      <SubShowcase/>
      <Meals featured={featured}/>
      <MealMenu/>
      <Banner/>
      <CustomerFeedback feedbackdata={feedbacks}/>
      <BannerSecondary/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/Featured');
  const feedback = await axios.get('http://localhost:3000/api/Feedback')
  return{
    props:{
      featured: res.data,
      feedbacks: feedback.data
    },
  };
};



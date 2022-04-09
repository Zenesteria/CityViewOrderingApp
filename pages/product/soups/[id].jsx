import Product from "../../../components/ProductShowcase"
import axios from 'axios';

const soups = ({product}) => {
  return (
    <Product product={product}/>
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/Products/soups/${params.id}`)
    return{
      props:{
        product: res.data
      }
    }
}

export default soups;

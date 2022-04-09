import Product from "../../../components/ProductShowcase"
import axios from 'axios';

const cocktails = ({product}) => {
  return (
    <Product product={product}/>
  )
}

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/Products/cocktails/${params.id}`)
  return{
    props:{
      product: res.data
    }
  }
}

export default cocktails

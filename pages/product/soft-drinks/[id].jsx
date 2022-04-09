import Product from "../../../components/ProductShowcase"
import axios from 'axios';

const softdrinks = ({product}) => {
  return (
    <Product product={product}/>
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/Products/softdrinks/${params.id}`)
    return{
      props:{
        product: res.data
      }
    }
}

export default softdrinks

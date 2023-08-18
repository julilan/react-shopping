import axios from 'axios';

const api = 'https://fakestoreapi.com/products';

const products = await axios.get(api);

const ProductsList = () => {
  console.log(products.data);

  return <div>Products will be here</div>;
};

export default ProductsList;

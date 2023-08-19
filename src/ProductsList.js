import axios from 'axios';
import Product from './Product';
import Layout from './components/Layout';

const api = 'https://fakestoreapi.com/products';

const { data: products } = await axios.get(api);

const ProductsList = () => {
  console.log(products);

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          placeContent: 'center center',
        }}
      >
        {Array.isArray(products) &&
          products.map((product) => <Product key={product?.id} {...product} />)}
      </div>
    </Layout>
  );
};

export default ProductsList;

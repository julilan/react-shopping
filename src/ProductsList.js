import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Product from './Product';
import Layout from './components/Layout';

const api = 'https://fakestoreapi.com/products';

const fetchAllProducts = async () => {
  const res = await axios(api);
  return res.data;
};

const ProductsList = () => {
  const { isLoading, isError, isSuccess, isFetching, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFetching) {
    return <span>Fetching... 🐒</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isSuccess) {
    console.log('Yay! Success!');
  }

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          placeContent: 'center center',
        }}
      >
        {Array.isArray(data) &&
          data.map((product) => <Product key={product?.id} {...product} />)}
      </div>
    </Layout>
  );
};

export default ProductsList;

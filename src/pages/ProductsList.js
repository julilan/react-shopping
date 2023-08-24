import { useQuery } from '@tanstack/react-query';
import ProductCard from '../UI/ProductCard';
import { fetchAllProducts } from '../api/ProductsAPI';
import Layout from '../components/Layout';

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
          data.map((product) => <ProductCard key={product?.id} {...product} />)}
      </div>
    </Layout>
  );
};

export default ProductsList;

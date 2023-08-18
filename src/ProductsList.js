import axios from 'axios';
import Product from './Product';

const api = 'https://fakestoreapi.com/products';

const { data: products } = await axios.get(api);

const ProductsList = () => {
  console.log(products);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        placeContent: 'center center',
      }}
    >
      {Array.isArray(products) &&
        products.map((product) => (
          <Product key={product?.id} {...product} /> // ? is quite useful if the item is still undefined
        ))}
    </div>
  );
};

export default ProductsList;

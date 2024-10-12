import {
  useEffect,
  useState
} from 'react';
import AnimatedPageWrapper from '@common/AnimatedPageWrapper'
import ProductCard from '@components/ProductCard';
import * as styles from './index.module';


const Store: React.FC = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  console.log(products,"products")
  return  <AnimatedPageWrapper>
      <div>
        <div className="container m-auto pt-20">
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {
              products.map((product)=>{
                return <ProductCard key={product.id} productItemData={product} ></ProductCard>
              })
            }
          </div>
        </div>
      </div>
    </AnimatedPageWrapper>
  };
  
export default Store;
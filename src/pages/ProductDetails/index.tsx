import {
  useEffect,
  useState
} from 'react'
import { Link, useParams  } from "react-router-dom";
import PageLoader from '@common/PageLoader'
import * as styles from './index.module.scss'
function ProductDetails() {
  let params = useParams()
  console.log(params.id)
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if(params.id){
      const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const data = await response.json();
        setProduct(data);
      };
      fetchProduct();
    }

  }, [params.id]);
  return (
    <div>
      <div className={``}>
        <div className="container m-auto pt-20">
          {
            !product ? <PageLoader/> : <></>
          }
          {
            product ? 
            <div>
              <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                  <div className="w-full h-full flex justify-center items-center">
                  {/* image */}
                  <div className="w-[200px] mx-auto flex justify-center items-center">
                      <img
                      className="max-h-[160px] group-hover:scale-110 transition duration-300"
                      src={product.image}
                      alt=""
                      />
                  </div>
                  </div>
              </div>
              {/* category, title & price */}
              <div>
                  <div className="tex-sm capitalize text-gray-500 mb-1">{product.category}</div>
                  <h2 className="font-semibold mb-1">{product.title}</h2>

                  <h2 className="font-semibbold">$ {product.price}</h2>
              </div>
          </div>:<></>
          }
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
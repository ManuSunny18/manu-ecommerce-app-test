import {
  useEffect,
  useState
} from 'react';
import AnimatedPageWrapper from '@common/AnimatedPageWrapper'
import ProductCard from '@components/ProductCard';
import PageLoader from '@common/PageLoader'
import {
  useGetStoreListingQuery
} from "@api"
import * as styles from './index.module';


const Store: React.FC = () => {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([])
  const {
    data,
    error,
    isLoading
  }  =useGetStoreListingQuery(page)
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isLoading) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isLoading]);
  useEffect(()=>{

    if(data?.length >0) {
      const modifiedData = data.map((item)=>{
        return {
          ...item,
          id:`${item.id}_${new Date().getTime()}`
        }
      })
      setProducts((prevProducts)=>{
        return [...prevProducts,...modifiedData]
      })
    }
  },[data])
  console.log(products,"prducts")
  return  <AnimatedPageWrapper>
      <div>
        <div className="container m-auto pt-20">
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
          {
            products?.length > 0 ? 
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {
                  products.map((product)=>{
                    return <ProductCard key={product.id} productItemData={product} ></ProductCard>
                  })
                }
              </div> :<></>
          }
          {
            isLoading ? <PageLoader/>:<></>
          }
         
        </div>
      </div>
    </AnimatedPageWrapper>
  };
  
export default Store;
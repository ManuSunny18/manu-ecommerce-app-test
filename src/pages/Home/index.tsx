import { Link } from "react-router-dom";
import * as styles from './index.module.scss'
//import bannerImg from '@assets/images/banner.jpg'
function Home() {
  return (
    <div>
      <div className={`h-screen bg-gradient-to-r from-cyan-500 to-blue-500 bg-center bg-cover`}>
        <div className="container m-auto pt-20">
          <h1 className="font-bold text-white text-6xl">Welcome to E-cart</h1>
          <p className="mt-4 text-white ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
          <div className="mt-6">
            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to="/store">Go to Store</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
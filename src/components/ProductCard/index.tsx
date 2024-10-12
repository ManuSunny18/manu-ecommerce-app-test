import React, {ReactNode} from "react";;
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import {toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { addToCart } from "@store/slice/cartSlice";
import Product from "@types/product";
type Props = {
    productItemData: any
}
  
// I want a fade in bottom-up - fade out top-down animation 
// so these are my variants 
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}
  
const ProductCard = ({productItemData }: Props): React.JSX.Element => {
    const dispatch = useDispatch();
    const { id, image, category, title, price } = productItemData;
    const onAddToCart = (product: Product) => {
        dispatch(addToCart(product));
        toast("Added to cart");
      };
    return (
        <div data-testid={`product_${productItemData.id}`}>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                {/* image */}
                <div className="w-[200px] mx-auto flex justify-center items-center">
                    <img
                    className="max-h-[160px] group-hover:scale-110 transition duration-300"
                    src={image}
                    alt=""
                    />
                </div>
                </div>
                {/* buttons */}
                <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                    onClick={()=>{
                        onAddToCart(productItemData)
                    }}
                >
                    <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500">
                        <BsPlus className="text-3xl" />
                    </div>
                </button>
                <Link
                    to={`/view/${id}`}
                    className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                >
                    <BsEyeFill />
                </Link>
                </div>
            </div>
            {/* category, title & price */}
            <div>
                <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
                <Link to={`/view/${id}`}>
                    <h2 className="font-semibold mb-1">{title}</h2>
                </Link>

                <h2 className="font-semibbold">$ {price}</h2>
            </div>
        </div>
    );
};
export default ProductCard
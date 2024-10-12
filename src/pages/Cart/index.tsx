import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseQuantity, reset } from "@store/slice/cartSlice";
import CartProduct from '@components/CartProduct'
import { FiTrash2 } from "react-icons/fi";
import * as styles from './index.module';
const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cartReducer.cart);
    const itemAmount = cartItems.reduce((acc,curr)=>{
      acc = acc + curr.quantity* curr.price
      return acc
  },0)
  const total = itemAmount
    return  <div className="container m-auto pt-20">
      <div
                    className={`"w-full bg-white h-full shadow-2xl transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
                >
                    <div className="flex items-center justify-between py-6 border-b">
                        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
                    </div>
                    <div className="flex flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b">
                        {cartItems.map((item) => {
                            return <CartProduct productDetails={item} key={`cart_${item.id}`} />;
                        })}
                    </div>
                    <div className="flex flex-col gap-y-3  mt-4">
                        <div className="flex w-full justify-between items-center">
                            {/* total */}
                            <div className="font-semibold">
                                <span className="mr-2">Subtotal:</span> ${" "}
                                {parseFloat(total).toFixed(2)}
                            </div>
                            {/* clear cart icon */}
                            <button
                                onClick={()=>{
                                    dispatch(reset())
                                }}
                                className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
                            >
                                <FiTrash2 />
                            </button>
                        </div>
                        <Link
                            to={"/cart"}
                            className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
                        >
                            View Cart
                        </Link>
                        <Link
                            to={"/"}
                            className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
    </div>
  };
  
export default Cart;
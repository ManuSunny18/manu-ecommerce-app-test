import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decreaseQuantity, addToCart, removeItem } from "@store/slice/cartSlice";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";


const CartProduct = ({ productDetails }) => {
    const dispatch = useDispatch();
    // destructure item
    const { id, title, image, price = 1, amount = 1, quantity=1 } = productDetails;
    const removeFromCart = ()=>{}
    const decreaseAmount = ()=>{
        decreaseAmount
    }
    const increaseAmount = ()=>{}
    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* image */}
                <Link to={`/product/${id}`}>
                <img className="max-w-[80px]" src={image} alt="" />
                </Link>
                <div className="w-full flex flex-col">
                {/* title and remove icon */}
                <div className="flex justify-between mb-2">
                    {/* title */}
                    <Link
                    to={`/product/${id}`}
                    className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
                    >
                    {title}
                    </Link>
                    {/* remove icon */}
                    <div
                    onClick={() => {
                        dispatch(removeItem({
                            id:productDetails.id
                        }))
                    }}
                    className="text-xl cursor-pointer"
                    >
                    <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                    </div>
                </div>
                <div className="flex gap-x-2 h-[36px] text-sm">
                    {/* quantity */}
                    <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                    <div onClick={()=>{
                        if(quantity > 1) {
                            dispatch(decreaseQuantity({
                                id:productDetails.id
                            }))
                        }
                    }} className="h-full flex-1 flex justify-center items-center cursor-pointer">
                        <IoMdRemove />
                    </div>
                    <div className="h-full flex justify-center items-center px-2">
                        {quantity}
                    </div>
                    <div onClick={()=>{
                        dispatch(addToCart(productDetails))
                    }} className="h-full flex flex-1 justify-center items-center cursor-pointer">
                        <IoMdAdd />
                    </div>
                    </div>
                    {/* item price */}
                    <div className="flex flex-1 justify-around items-center">
                    $ {price}
                    </div>
                    {/* final price */}
                    <div className="flex flex-1 justify-end items-center text-primary font-medium">{`$ ${parseFloat(
                    price * quantity
                    ).toFixed(2)}`}</div>
                </div>
                </div>
            </div>
        </div>
  );
};

export default CartProduct;
import React, { FC, ReactElement, ReactInstance,ComponentType, ReactNode, useContext, useState } from "react";
import ReactDOM from 'react-dom';
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseQuantity, reset } from "@store/slice/cartSlice";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartProduct from '@components/CartProduct'

type SideWindowRootProps = {
    children: ReactNode
}
type CartWindowProps = {
    TriggerComponent: FC
}
  
/*
This is the portal for the side window
*/
function SideWindowRoot({ children }:SideWindowRootProps) {
    const sideWindowContainer:HTMLElement = document.getElementById('sideWindowContainer') || document.body;
    return ReactDOM.createPortal(
      <div className="modal">
        {children}
      </div>,
      sideWindowContainer
    );
  }

/*
  cart side window
*/
const CartWindow = ({
    TriggerComponent,
}:CartWindowProps) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cartReducer.cart);
    const addedItems = cartItems.length || 0

    //local state to show/hide the window
    const [isOpen, setIsOpen] = useState(false)
    const handleClose = ()=>{
        setIsOpen(false)
    }
    const itemAmount = cartItems.reduce((acc,curr)=>{
        acc = acc + curr.quantity* curr.price
        return acc
    },0)
    const cart = []
    const total = itemAmount
    const clearCart = ()=>{}
    return (
        <>
            <TriggerComponent 
                addedItems={addedItems}
                onItemClick={()=>{
                    setIsOpen(true)
                }}/>
            <SideWindowRoot>
                <div
                    className={`${
                        isOpen ? "right-0" : "-right-full"
                    } "w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
                >
                    <div className="flex items-center justify-between py-6 border-b">
                        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
                        <div
                            onClick={handleClose}
                            className="cursor-poniter w-8 h-8 flex justify-center items-center"
                        >
                            <IoMdArrowForward  className="text-2xl cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 h-[320px] md:h-[320px] lg:h-[320px] overflow-y-auto overflow-x-hidden border-b">
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
                                    handleClose()
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
            </SideWindowRoot>
        </>
  );
};

export default CartWindow;
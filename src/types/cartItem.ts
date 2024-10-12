import Product from "./product";

type CartItem = Product & {
  quantity: number;
};

export default CartItem;
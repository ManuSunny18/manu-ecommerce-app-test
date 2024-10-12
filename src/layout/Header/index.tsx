import { Link, useLocation  } from "react-router-dom";
import CartWindow from '@components/CartWindow'

const CartButton = ({
  onItemClick,
  addedItems
})=>{
    return <li 
            onClick={(e)=>{
              onItemClick()
              e.preventDefault()
            }}
            className="relative group p-4 cursor-pointer">
            <Link 
              onClick={(e)=>{
                e.preventDefault()
              }} to="">Cart</Link>
            {
              addedItems > 0 ?
              <div className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900">{addedItems}</div>:<></>
            }
            <span className="absolute -bottom-0 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
          </li>
}
const Header = () => {

  return (
    <header
      className={`flex bg-white py-2 drop-shadow-lg w-full z-10 lg:px-8 transition-all justify-between`}
    >
        <Link className="flex items-center" to="/">My App</Link>
        <nav>  
            <ul className="flex gap-x-6 ">
                <li className="relative group p-4">
                  <Link  to="/store">Store</Link>
                  <span className="absolute -bottom-0 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
                </li>
                <CartWindow 
                  TriggerComponent={CartButton}/>
            </ul>
        </nav>
        
    </header>
  );
}

export default Header
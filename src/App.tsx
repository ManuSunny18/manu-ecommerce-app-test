import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import Layout from './layout'
import Home from './pages/Home'
import store from "./store/store.ts";
const Store = React.lazy(() => import('@pages/Store'));
const Cart = React.lazy(() => import('@pages/Cart'));
const ProductDetails  =  React.lazy(() => import('@pages/ProductDetails'));

type LinkActive = { isActive: boolean }

const isActiveLink = ({ isActive }: LinkActive) => `link ${isActive ? 'active' : ''}`


const App = () =>{
    return <Router>
        <Provider store={store}>
    <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="store" element={
                    <React.Suspense fallback={<>...</>}>
                        <Store />
                    </React.Suspense>
                    
                } >
                </Route>
                <Route path="view"
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <ProductDetails />
                        </React.Suspense>
                    }
                    >
                    <Route path=":id" element={
                        <React.Suspense fallback={<>...</>}>
                            <ProductDetails />
                        </React.Suspense>
                    } />
                </Route>
                <Route path="cart" element={
                    <React.Suspense fallback={<>...</>}>
                        <Cart />
                    </React.Suspense>
                } />
            </Route>
    </Routes>
    </Provider>
  </Router>
}
export default App
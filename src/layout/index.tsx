import { Outlet } from 'react-router-dom';
import Header from './Header'
import AnimateLayout from '@common/AnimateLayout'
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer } from 'react-toastify';
function Layout() {
  return (
    <div>
      <Header></Header>
      <hr/>
      <main>
        <AnimateLayout />
      </main>
      <ToastContainer
          autoClose={2000}
          newestOnTop={true}
          position="top-center"
        />
    </div>
  );
}
export default Layout

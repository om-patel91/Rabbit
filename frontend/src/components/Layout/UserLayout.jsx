import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from "../Common/Footer";

const UserLayout = () => {
  return (
    <>
      { /* Header*/ }
      <Header />
      { /* Main content */ }
    <main>
     <Outlet />
     {/* <Outlet /> is a placeholder for nested routes to be rendered inside a parent route component. */}
    </main>
      { /* Footer */ }
      <Footer />
    </>
  )
}

export default UserLayout

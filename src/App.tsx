import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layout/Layout"
import Auth0Callback from "./auth/auth0Callback"
import AccountPage from "./pages/AccountPage"
import AdminPage from "./pages/AdminPage"
import DetailPage from "./pages/DetailPage"
import ProtectedRoute from "./auth/ProtectedRoute"
import CartPage from "./pages/CartPage"


function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout FooterColor={false} newsLetter={true}>
        <HomePage/>
      </Layout>}/>
      <Route path="/detail-page/:id" element={<Layout FooterColor={false} newsLetter={true}>
        <DetailPage/>
      </Layout>}/>
      <Route path="/authCallback" element={<Auth0Callback/>}/>
      <Route path="/cart" element={<Layout FooterColor={true}>
        <CartPage/>
      </Layout>}/>

      <Route element={<ProtectedRoute/>}>
      <Route path="/my-account" element={<Layout FooterColor={true}>
        <AccountPage/>
      </Layout>}/>
      <Route path="/dashboard" element={<Layout FooterColor={true}>
        <AdminPage/>
      </Layout>}/>
      </Route>

    </Routes>
  )
}

export default App

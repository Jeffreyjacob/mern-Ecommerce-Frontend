import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layout/Layout"
import Auth0Callback from "./auth/auth0Callback"
import AccountPage from "./pages/AccountPage"
import AdminPage from "./pages/AdminPage"
import DetailPage from "./pages/DetailPage"
import ProtectedRoute from "./auth/ProtectedRoute"
import CartPage from "./pages/CartPage"
import AfterPaymentPage from "./pages/AfterPaymentPage"
import SearchPage from "./pages/SearchPage"
import ScrolltoTop from "./components/shared/ScrolltoTop"


function App() {


  return (
    <ScrolltoTop>
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
      <Route path="/search" element={<Layout FooterColor={false} newsLetter={true}>
        <SearchPage/>
      </Layout>}/>

      <Route element={<ProtectedRoute/>}>
      <Route path="/my-account" element={<Layout FooterColor={true}>
        <AccountPage/>
      </Layout>}/>
      <Route path="/dashboard" element={<Layout FooterColor={true}>
        <AdminPage/>
      </Layout>}/>
      <Route path="/afterPayment" element={
        <Layout FooterColor={true}>
          <AfterPaymentPage/>
        </Layout>
      }/>
      </Route>
    </Routes>
    </ScrolltoTop>
  )
}

export default App

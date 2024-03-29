import {createBrowserRouter} from "react-router-dom";
import {Home} from "../components/pages/home/Home";
import App from "../App";
import {BlogDetail} from "../components/pages/blog-detail/BlogDetail";
import Contact from "../components/pages/contact/Contact";
import Cart from "../components/pages/shopping-cart/Cart";
import BlogList from "../components/pages/blog-list/BlogList";
import ProductList from "../components/pages/shop-product/ProductList";
import Checkout from "../components/pages/checkout/Checkout";
import Detail from "../components/pages/product-detail/Detail";
import SignIn from "../components/pages/sign-in/SignIn";
import SignUp from "../components/pages/sign-up/SignUp";
import NotFound from "../components/pages/others/NotFound";
import ForgotPassword from "../components/pages/forgot-pasword/ForgotPassword";
import MyAccount from "../components/pages/my-account/MyAccount";
import MyOrders from "../components/pages/my-orders/MyOrders";
import OrderDetail from "../components/pages/order-detail/OrderDetail";
import Wishlist from "../components/pages/wishlist/Wishlist";
import AddressList from "../components/pages/user-address/AddressList";
import AddNewAddress from "../components/pages/user-address/AddNewAddress";
import UpdateAddress from "../components/pages/user-address/UpdateAddress";

export const webRouter = createBrowserRouter([{
        path: '/',
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            }, {
                path: "home",
                element: <Home/>,
            }, {
                path: "sign-in",
                element: <SignIn/>,
            }, {
                path: "sign-up",
                element: <SignUp/>,
            }, {
                path: "product-list",
                element: <ProductList/>,
            }, {
                path: "product-detail",
                element: <Detail/>,
            }, {
                path: "blog-list",
                element: <BlogList/>,
            }, {
                path: "blog-detail",
                element: <BlogDetail/>,
            }, {
                path: "contact",
                element: <Contact/>,
            }, {
                path: "cart",
                element: <Cart/>,
            }, {
                path: "checkout",
                element: <Checkout/>,
            }, {
                path: "not-found",
                element: <NotFound/>,
            }, {
                path: "forgot-password",
                element: <ForgotPassword/>,
            }, {
                path: "user/account",
                element: <MyAccount/>,
            }, {
                path: "user/address",
                element: <AddressList/>,
            }, {
                path: "user/address/new",
                element: <AddNewAddress/>,
            }, {
                path: "user/address/update",
                element: <UpdateAddress/>,
            }, {
                path: "user/order",
                element: <MyOrders/>,
            }, {
                path: "order-detail",
                element: <OrderDetail/>,
            }, {
                path: "user/wishlist",
                element: <Wishlist/>,
            }]
    }])
;
import { createBrowserRouter } from "react-router-dom";
import { Home, About, Contact, MedicalStore, Layout, Shop, ShopDetail, Wishlist} from "../components/index";
import { Cart } from "../components/Cart/Cart.jsx";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, children: [
            {
                index: true,
                element: <MedicalStore />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />

            },
            {
                path: "/shop",
                element: <Shop />

            },
            {
                path: "/ShopDetail/:type/:id",
                element: <ShopDetail />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            }
        ]
    }




])

export default route;
import { createBrowserRouter } from "react-router-dom";
import { Home, About, Contact, MedicalStore, Layout, Shop} from "../components/index";

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

            }
        ]
    }




])

export default route;
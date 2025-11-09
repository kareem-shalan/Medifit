import route from "./routes/route.jsx";
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext.jsx";
import { WishlistContextProvider } from "./context/wishlistContext.jsx";

const App = () => {
	return (
		<WishlistContextProvider>


			<CartContextProvider>
				<RouterProvider router={route} />
			</CartContextProvider>

		</WishlistContextProvider>

	);
};

export default App;

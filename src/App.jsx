import route from "./routes/route.jsx";
import { RouterProvider } from "react-router-dom";

const App = () => {
	return (
		<RouterProvider router={route} />
	);
};

export default App;

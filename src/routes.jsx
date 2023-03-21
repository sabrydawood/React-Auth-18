import { createBrowserRouter } from "react-router-dom"
import { 
	Layout, 
	NotFound, 
	Home ,
	Login,
	Rigster
} from "@/Pages"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
      {
        path: "home",
        element: <Home />,
      },
			{
				path: "login",
				element: <Login />
			},{
				path: "rigster",
				element: <Rigster />
			},
    ],
	},
]);


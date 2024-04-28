import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import MainLayout from "../layout/MainLayout"
import Login from "../pages/Login"
import Register from "../pages/Register"
import TouristsSpot from "../pages/TouristsSpot"
import AddTouristsSpot from "../pages/AddTouristsSpot"
import PrivateRoute from "../components/privateRoute/PrivateRoute"
import TouristsSpotDetails from "../pages/TouristsSpotDetails"
import MyList from "../pages/MyList"
import TouristsSpotUpdate from "../pages/TouristsSpotUpdate"
import AddCountry from "../pages/AddCountry"
import CountryTouristsSpot from "../pages/CountryTouristsSpot"
import ErrorPage from "../components/ErrorPage"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("https://voyago-tourism-server.vercel.app/touristsSpot"),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/allTouristsSpot",
				element: <TouristsSpot />,
				loader: () => fetch("https://voyago-tourism-server.vercel.app/touristsSpot"),
			},
			{
				path: "/addTouristsSpot",
				element: (
					<PrivateRoute>
						<AddTouristsSpot />
					</PrivateRoute>
				),
			},
			{
				path: "/touristsSpot/:id",
				element: (
					<PrivateRoute>
						<TouristsSpotDetails />
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`https://voyago-tourism-server.vercel.app/touristsSpot/${params.id}`),
			},
			{
				path: "/myList",
				element: (
					<PrivateRoute>
						<MyList />
					</PrivateRoute>
				),
			},
			{
				path: "/touristsSpotUpdate/:id",
				element: (
					<PrivateRoute>
						<TouristsSpotUpdate />
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`https://voyago-tourism-server.vercel.app/touristsSpot/${params.id}`),
			},
			{
				path: "/addCountry",
				element: (
					<PrivateRoute>
						<AddCountry />
					</PrivateRoute>
				),
			},
			{
				path: "/country/:id",
				element: (
					<PrivateRoute>
						<CountryTouristsSpot />
					</PrivateRoute>
				),
				loader: () => fetch("https://voyago-tourism-server.vercel.app/country"),
			},
		],
	},
])

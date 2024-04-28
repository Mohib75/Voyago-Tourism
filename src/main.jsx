import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App.jsx"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Routes.jsx"
import FirebaseProvider from "./firebaseProvider/FirebaseProvider.jsx"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <HelmetProvider>
			</HelmetProvider> */}
		<FirebaseProvider>
			<RouterProvider router={router} />
			<Toaster />
		</FirebaseProvider>
	</React.StrictMode>
)

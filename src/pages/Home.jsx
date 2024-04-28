import { useLoaderData } from "react-router-dom"
import BannerSlider from "../components/BannerSlider"
import BestTouristSpot from "../components/BestTouristSpot"
import Country from "../components/Country"
import VideoHome from "../components/VideoHome"
import WhyChooseUs from "../components/WhyChooseUs"
import { Helmet } from "react-helmet-async"

const Home = () => {
	const loadedtouristsSpot = useLoaderData()
	return (
		<div className='mt-12 mx-4 xl:mx-0'>
			<Helmet>
				<title>Voyago</title>
			</Helmet>

			<BannerSlider />

			<BestTouristSpot loadedtouristsSpot={loadedtouristsSpot} />

			<WhyChooseUs />

			<Country />

			<VideoHome />
		</div>
	)
}

export default Home

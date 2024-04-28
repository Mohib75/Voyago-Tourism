import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import TouristsSpotCard from "../components/TouristsSpotCard"
import { FaAngleDown } from "react-icons/fa"
import { Helmet } from "react-helmet-async"

const TouristsSpot = () => {
	const loadedtouristsSpot = useLoaderData()
	const [touristsSpot, setTouristsSpot] = useState(loadedtouristsSpot)

	// Function to handle sorting by average cost
	const handleSortByAverageCost = () => {
		const sortedTouristsSpot = [...touristsSpot].sort((a, b) => b.average_cost - a.average_cost)
		setTouristsSpot(sortedTouristsSpot)
	}

	return (
		<div className='bg-[#17171a] p-8 flex flex-col items-center rounded-2xl mt-12 mx-4 sm:mx-0'>
			<Helmet>
				<title>Voyago || Tourists Spot</title>
			</Helmet>
			<h2 className='text-xl sm:text-6xl text-white font-bold my-8 text-center'>Our Tourists Spots</h2>

			<div className='dropdown self-center my-8'>
				<div
					tabIndex={0}
					role='button'
					className='btn rounded-lg bg-transparent text-white border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] transition-all duration-500'>
					Sort By
					<FaAngleDown />
				</div>
				<ul tabIndex={0} className='dropdown-content z-[1] menu p-4 shadow bg-black rounded-lg w-40 sm:w-52'>
					<li onClick={handleSortByAverageCost} className='hover:bg-[#29d9d5] hover:text-white transition-all duration-500 rounded-lg'>
						<a> Average Cost</a>
					</li>
				</ul>
			</div>

			<div className='grid grid-cols-1 xl:grid-cols-3 gap-8 place-items-center mt-4'>
				{touristsSpot &&
					touristsSpot.map((tSpot, index) => (
						<div key={index}>
							<TouristsSpotCard tSpot={tSpot} />
						</div>
					))}
			</div>
		</div>
	)
}

export default TouristsSpot

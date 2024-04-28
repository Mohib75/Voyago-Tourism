import { useState } from "react"
import TouristsSpotCard from "./TouristsSpotCard"
import { Fade, Slide } from "react-awesome-reveal"

const BestTouristSpot = ({ loadedtouristsSpot }) => {
	const [touristsSpot, setTouristsSpot] = useState(loadedtouristsSpot)
	return (
		<div className='bg-[#17171a] p-8 flex flex-col items-center rounded-2xl mt-20'>
			<Slide direction='up'>
				<h3 className='text-xl lg:text-2xl text-[#29d9d5] font-semibold mt-2 text-center'>Our Tourists Spot</h3>
			</Slide>

			<Slide direction='down'>
				<h2 className='text-3xl lg:text-6xl text-white font-bold my-8 text-center'>Our Best Tourists Spot</h2>
			</Slide>

			<Fade duration='2000'>
				<div className='grid grid-cols-1 xl:grid-cols-3 gap-8 place-items-center mt-4'>
					{touristsSpot &&
						touristsSpot.slice(0, 6).map((tSpot, index) => (
							<div key={index} className=''>
								<TouristsSpotCard tSpot={tSpot} touristsSpot={touristsSpot} setTouristsSpot={setTouristsSpot} />
							</div>
						))}
				</div>
			</Fade>
		</div>
	)
}

export default BestTouristSpot

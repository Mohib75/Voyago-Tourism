import { Link } from "react-router-dom"

const TouristsSpotCard = ({ tSpot }) => {
	const { _id, spot_name, image, description } = tSpot
	return (
		<div className='card sm:w-96 bg-black shadow-xl h-[450px] rounded-2xl'>
			<figure className='w-full h-full'>
				<img src={image} className='object-cover w-full h-full hover:scale-110 transform transition-all duration-500' alt='Tourist Spot' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title text-white'>{spot_name}</h2>
				<p className='text-[#FFFFFF9E]'>{description.slice(0, 100) + "..."}</p>
				<div className='card-actions justify-end'>
					<Link to={`/touristsSpot/${_id}`} className='text-[#29d9d5] hover:scale-105 transition-all duration-500'>
						View Details
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TouristsSpotCard

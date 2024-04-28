import { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"

const Country = () => {
	const [countryData, setCountryData] = useState([])
	useEffect(() => {
		fetch(`https://voyago-tourism-server.vercel.app/country`)
			.then((res) => res.json())
			.then((data) => {
				setCountryData(data)
			})
	}, [])
	return (
		<div className='bg-[#17171a] p-8 flex flex-col items-center rounded-2xl mt-20'>
			<Fade cascade>
				<h3 className='text-xl lg:text-2xl text-[#29d9d5] font-semibold mt-2 text-center'>Countries</h3>

				<h2 className='text-3xl lg:text-6xl text-white font-bold my-8 text-center'>Our Best Countries For Tourists</h2>

				<div className='grid grid-cols-1 xl:grid-cols-3 gap-8 place-items-center mt-4'>
					{countryData &&
						countryData.slice(0, 6).map((cData, index) => (
							<Link to={`/country/${cData._id}`} className='text-[#29d9d5] hover:scale-105 transition-all duration-500' key={index}>
								<div className='card sm:w-96 bg-black shadow-xl h-[450px] rounded-2xl'>
									<figure className='w-full h-full'>
										<img
											src={cData.image}
											className='object-cover w-full h-full hover:scale-110 transform transition-all duration-500'
											alt='Tourist Spot'
										/>
									</figure>
									<div className='card-body'>
										<h2 className='card-title text-white'>{cData.country_name}</h2>
										<p className='text-[#FFFFFF9E]'>{cData.description.slice(0, 100) + "..."}</p>
									</div>
								</div>
							</Link>
						))}
				</div>
			</Fade>
		</div>
	)
}

export default Country

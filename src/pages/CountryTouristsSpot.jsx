import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import TouristsSpotCard from "../components/TouristsSpotCard"
import { Fade } from "react-awesome-reveal"

const CountryTouristsSpot = () => {
	const loadedCountry = useLoaderData()
	const [countryData, setCountryData] = useState([])

	const { id } = useParams()
	const country = loadedCountry.find((country) => country._id === id)
	const { country_name } = country

	useEffect(() => {
		fetch(`https://voyago-tourism-server.vercel.app/country/${country_name}`)
			.then((res) => res.json())
			.then((data) => {
				setCountryData(data)
			})
	}, [country_name])
	return (
		<div className='bg-[#17171a] p-8 flex flex-col items-center rounded-2xl mt-12'>
			<Fade cascade>
				<h2 className='text-6xl text-white font-bold my-8 text-center'>Our {country_name} Tourists Spots</h2>

				<div className='grid grid-cols-3 gap-8 place-items-center mt-4'>
					{countryData &&
						countryData.map((cData, index) => (
							<div key={index} className=''>
								<TouristsSpotCard tSpot={cData} />
							</div>
						))}
				</div>
			</Fade>
		</div>
	)
}

export default CountryTouristsSpot

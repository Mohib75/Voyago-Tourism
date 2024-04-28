import { Fade } from "react-awesome-reveal"
import { Helmet } from "react-helmet-async"
import { FaCalendar, FaMap, FaPhoneAlt, FaRegClock } from "react-icons/fa"
import { FaPeopleGroup } from "react-icons/fa6"
import { IoMailOpenSharp } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx"
import { TiTick } from "react-icons/ti"
import { useLoaderData } from "react-router-dom"

const TouristsSpotDetails = () => {
	const touristsSpot = useLoaderData()
	const { spot_name, country_name, image, location, description, seasonality, travel_time, average_cost, total_visitors_per_year } = touristsSpot
	return (
		<div className='flex flex-col gap-8 mt-8 mx-4 xl:mx-0'>
			<Helmet>
				<title>Voyago || Tourists Spot Detail</title>
			</Helmet>
			<Fade cascade>
				<div className='relative h-[400px]'>
					<div className='opacity-50 rounded-2xl h-full'>
						<img className='object-bottom w-full h-full rounded-2xl' src={image} />
					</div>
					<h1 className='text-3xl sm:text-6xl text-white font-bold text-center flex absolute top-0 w-full justify-center items-center h-full'>
						{spot_name}
					</h1>
				</div>

				<div className='grid grid-cols-1 xl:grid-cols-3 gap-12 mt-12'>
					<div className='xl:col-span-2 flex flex-col gap-8'>
						<h1 className='text-3xl sm:text-6xl text-[#29d9d5] font-bold'>{spot_name}</h1>
						<div className='rounded-2xl sm:w-96 h-80 self-center'>
							<img className='object-cover w-full h-full rounded-2xl' src={image} />
						</div>
						<h3 className='text-white text-lg font-semibold'>Tour Description</h3>
						<p className='text-[#FFFFFF9E] '>{description}</p>

						<h3 className='text-white text-lg font-semibold'>Location</h3>
						<p className='text-[#FFFFFF9E] '>It is located in the {location}.</p>

						<div className='flex flex-col gap-8 sm:flex-row sm:justify-between sm:w-[70%]'>
							<div className='flex flex-col gap-6'>
								<h3 className='text-white text-lg font-semibold mb-2'>Include</h3>

								<div className='flex gap-4 items-center'>
									<TiTick className='text-[#29d9d5]' />
									<p className='font-light text-white'>Tour Guide</p>
								</div>
								<div className='flex gap-4 items-center'>
									<TiTick className='text-[#29d9d5]' />
									<p className='font-light text-white'>Accommodation</p>
								</div>
								<div className='flex gap-4 items-center'>
									<TiTick className='text-[#29d9d5]' />
									<p className='font-light text-white'>Pickup Ride</p>
								</div>
								<div className='flex gap-4 items-center'>
									<TiTick className='text-[#29d9d5]' />
									<p className='font-light text-white'>BreakFast</p>
								</div>
								<div className='flex gap-4 items-center'>
									<TiTick className='text-[#29d9d5]' />
									<p className='font-light text-white'>Dinner</p>
								</div>
							</div>

							<div className='flex flex-col gap-6'>
								<h3 className='text-white text-lg font-semibold mb-2'>Exclude</h3>

								<div className='flex gap-4 items-center'>
									<RxCross2 className='text-[#29d9d5]' />
									<p className='font-light text-white'>Photographer</p>
								</div>
								<div className='flex gap-4 items-center'>
									<RxCross2 className='text-[#29d9d5]' />
									<p className='font-light text-white'>Private Expenses</p>
								</div>
								<div className='flex gap-4 items-center'>
									<RxCross2 className='text-[#29d9d5]' />
									<p className='font-light text-white'>Room Service</p>
								</div>
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-8'>
						<div className='bg-[#17171a] px-8 py-12 flex flex-col rounded-2xl gap-12 h-[500px] sm:w-96 xl:w-full self-center xl:self-auto'>
							<p>
								<span className='text-6xl text-[#29d9d5] font-bold'>${average_cost}</span>
								<sub className='font-medium text-white'>/person</sub>
							</p>
							<div className='flex flex-col gap-8'>
								<h3 className='text-white text-lg font-semibold mb-2'>Tour Detail</h3>

								<div className='flex gap-4 items-center'>
									<FaMap className='text-[#29d9d5]' />
									<p className='font-light text-white'>{country_name}</p>
								</div>

								<div className='flex gap-4 items-center'>
									<FaRegClock className='text-[#29d9d5]' />
									<p className='font-light text-white'>{travel_time}</p>
								</div>

								<div className='flex gap-4 items-center'>
									<FaPeopleGroup className='text-[#29d9d5]' />
									<p className='font-light text-white'>
										{total_visitors_per_year} visitors <sub>/year</sub>
									</p>
								</div>

								<div className='flex gap-4 items-center'>
									<FaCalendar className='text-[#29d9d5]' />
									<p className='font-light text-white'>{seasonality}</p>
								</div>
							</div>
						</div>

						<div className='relative'>
							<div className='rounded-2xl w-full h-72 opacity-30'>
								<img className='object-cover w-full h-full rounded-2xl' src='/contact.jpeg' />
							</div>

							<div className='flex flex-col gap-8 absolute top-6 sm:top-12 justify-center items-center w-full'>
								<h4 className='text-white text-xl font-bold'>Have Any Question?</h4>

								<p className='text-[#FFFFFF9E] text-center text-xs sm:text-base'>
									feel free to contact with us at anytime. Our information is given below.
								</p>

								<div className='flex flex-col gap-4'>
									<div className='flex gap-4 items-center text-sm sm:text-base'>
										<FaPhoneAlt className='text-[#29d9d5]' />
										<p className='font-light text-white'>+8801971125806</p>
									</div>

									<div className='flex gap-4 items-center text-sm sm:text-base'>
										<IoMailOpenSharp className='text-[#29d9d5]' />
										<p className='font-light text-white'>ifthakherrahman426@gmail.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	)
}

export default TouristsSpotDetails

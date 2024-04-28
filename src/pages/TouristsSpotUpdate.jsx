import { Slide } from "react-awesome-reveal"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom"

import Swal from "sweetalert2"

const TouristsSpotUpdate = () => {
	const tSpot = useLoaderData()
	console.log(tSpot)
	const { _id, spot_name, country_name, image, location, description, seasonality, travel_time, average_cost, total_visitors_per_year } = tSpot
	const { register, handleSubmit } = useForm({
		criteriaMode: "all",
	})

	const onSubmit = (data) => {
		const { spot_name, country_name, image, location, description, seasonality, travel_time, average_cost, total_visitors_per_year } = data

		const updateTouristData = {
			spot_name,
			country_name,
			image,
			location,
			description,
			seasonality,
			travel_time,
			average_cost,
			total_visitors_per_year,
		}

		console.log(updateTouristData)

		// send data to the server
		fetch(`https://voyago-tourism-server.vercel.app/touristsSpot/${_id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updateTouristData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: "Success!",
						text: "Tourists Spot Updated",
						icon: "success",
						confirmButtonText: "Cool😎",
					})
				}
			})
	}
	return (
		<Slide direction='down'>
			<Helmet>
				<title>Voyago || Tourists Spot Update</title>
			</Helmet>
			<div className='flex justify-center my-16 mx-4 lg:mx-0'>
				<div
					className='w-full max-w-4xl py-8 px-6 sm:p-8 space-y-3 rounded-xl bg-[#17171a] drop-shadow-xl mx-4 sm:mx-0'
					data-aos='zoom-in-down'
					data-aos-delay='800'>
					<h1 className='text-xl sm:text-2xl font-bold text-center mb-4 text-[#29d9d5]'>Update Tourists Spot</h1>
					<form action='' className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
						<div className='flex gap-4 flex-col sm:flex-row items-center w-full'>
							<div className='space-y-1 text-sm w-full sm:w-1/2'>
								<label htmlFor='spot_name' className='block text-[#FFFFFF9E]'>
									Tourist Spot Name
								</label>
								<input
									{...register("spot_name")}
									type='text'
									name='spot_name'
									id='spot_name'
									defaultValue={spot_name}
									placeholder='Tourist Spot Name'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>

							<div className='space-y-1 text-sm w-full sm:w-1/2'>
								<label htmlFor='country_name' className='block text-[#FFFFFF9E]'>
									Country Name
								</label>
								<input
									required
									{...register("country_name")}
									type='text'
									name='country_name'
									id='country_name'
									defaultValue={country_name}
									placeholder='Country Name'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>
						</div>

						<div className='flex gap-4 flex-col sm:flex-row items-center w-full'>
							<div className='space-y-1 text-sm w-full sm:w-1/2'>
								<label htmlFor='image' className='block text-[#FFFFFF9E]'>
									Image
								</label>
								<input
									{...register("image")}
									type='text'
									name='image'
									id='image'
									defaultValue={image}
									placeholder='Image'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>

							<div className='space-y-1 text-sm w-full sm:w-1/2'>
								<label htmlFor='location' className='block text-[#FFFFFF9E]'>
									Location
								</label>
								<input
									required
									{...register("location")}
									type='text'
									name='location'
									id='location'
									defaultValue={location}
									placeholder='Location'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>
						</div>

						<div className='flex gap-4 flex-col sm:flex-row items-center w-full'>
							<div className='space-y-1 text-sm w-full'>
								<label htmlFor='description' className='block text-[#FFFFFF9E]'>
									Description
								</label>
								<input
									{...register("description")}
									type='text'
									name='description'
									id='description'
									defaultValue={description}
									placeholder='Description'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>
						</div>

						<div className='flex gap-4 flex-col sm:flex-row items-center w-full'>
							<div className='space-y-1 text-sm w-full sm:w-1/2'>
								<label htmlFor='seasonality' className='block text-[#FFFFFF9E]'>
									Seasonality
								</label>
								<input
									{...register("seasonality")}
									type='text'
									name='seasonality'
									id='seasonality'
									defaultValue={seasonality}
									placeholder='Seasonality'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>

							<div className='space-y-1 text-sm w-full sm:w-1/2'>
								<label htmlFor='travel_time' className='block text-[#FFFFFF9E]'>
									Travel Time
								</label>
								<input
									required
									{...register("travel_time")}
									type='text'
									name='travel_time'
									id='travel_time'
									defaultValue={travel_time}
									placeholder='Travel Time'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>
						</div>

						<div className='flex gap-4 flex-col sm:flex-row items-center w-full'>
							<div className='space-y-1 text-sm w-full sm:w-1/2'>
								<label htmlFor='average_cost' className='block text-[#FFFFFF9E]'>
									Average Cost ($)
								</label>
								<input
									required
									{...register("average_cost")}
									type='text'
									name='average_cost'
									id='average_cost'
									defaultValue={average_cost}
									placeholder='Average Cost'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>
							<div className='space-y-1 text-sm w-full sm:w-1/2'>
								<label htmlFor='total_visitors_per_year' className='block text-[#FFFFFF9E]'>
									Total Visitors Per Year
								</label>
								<input
									{...register("total_visitors_per_year")}
									type='text'
									name='total_visitors_per_year'
									id='total_visitors_per_year'
									defaultValue={total_visitors_per_year}
									placeholder='Total Visitors Per Year'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>
						</div>

						<button className='block w-full p-3 text-center text-white bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] transition-all duration-500 rounded-md'>
							Update
						</button>
					</form>
				</div>
			</div>
		</Slide>
	)
}

export default TouristsSpotUpdate

import { Slide } from "react-awesome-reveal"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"

const AddCountry = () => {
	const { register, handleSubmit } = useForm({
		criteriaMode: "all",
	})

	const onSubmit = (data) => {
		const { country_name, image, description } = data

		const newTouristData = {
			country_name,
			image,

			description,
		}

		console.log(newTouristData)

		// send data to the server
		fetch("https://voyago-tourism-server.vercel.app/country", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newTouristData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Country Added",
						icon: "success",
						confirmButtonText: "Cool😎",
					})
				}
			})
	}

	return (
		<Slide direction='down'>
			<div className='flex justify-center my-16'>
				<div
					className='w-full max-w-4xl p-8 space-y-3 rounded-xl bg-[#17171a] drop-shadow-xl mx-4 sm:mx-0'
					data-aos='zoom-in-down'
					data-aos-delay='800'>
					<h1 className='text-2xl font-bold text-center mb-4 text-[#29d9d5]'>Add Country</h1>
					<form action='' className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
						<div className='flex gap-4 items-center w-full'>
							<div className='space-y-1 text-sm w-1/2'>
								<label htmlFor='country_name' className='block text-[#FFFFFF9E]'>
									Country Name
								</label>
								<input
									required
									{...register("country_name")}
									type='text'
									name='country_name'
									id='country_name'
									placeholder='Country Name'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>
							<div className='space-y-1 text-sm w-1/2'>
								<label htmlFor='image' className='block text-[#FFFFFF9E]'>
									Image
								</label>
								<input
									{...register("image")}
									type='text'
									name='image'
									id='image'
									placeholder='Image'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>
						</div>

						<div className='flex gap-4 items-center w-full'>
							<div className='space-y-1 text-sm w-full'>
								<label htmlFor='description' className='block text-[#FFFFFF9E]'>
									Description
								</label>
								<input
									{...register("description")}
									type='text'
									name='description'
									id='description'
									placeholder='Description'
									className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-900 outline-none'
								/>
							</div>
						</div>

						<button className='block w-full p-3 text-center text-white bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] transition-all duration-500 rounded-md'>
							Add
						</button>
					</form>
				</div>
			</div>
		</Slide>
	)
}

export default AddCountry

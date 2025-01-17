import { Link, useLocation, useNavigate } from "react-router-dom"
import SocialLogin from "../components/SocialLogin"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import { Slide } from "react-awesome-reveal"
import { Helmet } from "react-helmet-async"

const Register = () => {
	const { createUser, updateUserProfile, logout } = useAuth()
	const [showPassword, setShowPassword] = useState(false)

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		criteriaMode: "all",
	})

	// navigation system
	const navigate = useNavigate()
	const location = useLocation()
	const navigateFrom = location?.state || "/login"

	const onSubmit = (data) => {
		const { email, password, name, image } = data

		createUser(email, password).then(() => {
			toast.success("successfully register")
			updateUserProfile(name, image).then(() => {
				logout()
				navigate(navigateFrom)
			})
		})
	}

	const CustomErrorMessage = ({ message }) => {
		useEffect(() => {
			if (message) {
				toast.error(message) // Call the toast function with the error message
			}
		}, [message])

		return null // Prevent rendering of ErrorMessage component
	}
	return (
		<Slide direction='down'>
			<Helmet>
				<title>Voyago || Register</title>
			</Helmet>
			<div className='flex justify-center my-16'>
				<div
					className='w-full max-w-md p-8 space-y-3 rounded-xl bg-[#17171a] drop-shadow-xl mx-4 sm:mx-0'
					data-aos='zoom-in-down'
					data-aos-delay='800'>
					<h1 className='text-2xl font-bold text-center'>Register</h1>
					<form action='' className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
						<div className='space-y-1 text-sm'>
							<label htmlFor='name' className='block text-[#FFFFFF9E]'>
								Name
							</label>
							<input
								required
								{...register("name")}
								type='text'
								name='name'
								id='name'
								placeholder='Name'
								className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900 outline-none'
							/>
						</div>
						<div className='space-y-1 text-sm'>
							<label htmlFor='email' className='block text-[#FFFFFF9E]'>
								Email
							</label>
							<input
								required
								{...register("email")}
								type='email'
								name='email'
								id='email'
								placeholder='Email'
								className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900 outline-none'
							/>
						</div>
						<div className='space-y-1 text-sm'>
							<label htmlFor='image' className='block text-[#FFFFFF9E]'>
								Photo URL
							</label>
							<input
								{...register("image")}
								type='text'
								name='image'
								id='image'
								placeholder='Photo URL'
								className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900 outline-none'
							/>
						</div>
						<div className='space-y-1 text-sm relative'>
							<label htmlFor='password' className='block text-[#FFFFFF9E]'>
								Password
							</label>
							<input
								required
								{...register("password", {
									pattern: {
										value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
									},
								})}
								type={showPassword ? "text" : "password"}
								name='password'
								id='password'
								placeholder='Password'
								className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900 outline-none'
							/>
							{errors.password && (
								<CustomErrorMessage message='Password must be 6 character long & must be an uppercase & must be a lowercase letter included' />
							)}
							<span className='absolute bottom-4 right-4 cursor-pointer text-gray-900' onClick={() => setShowPassword(!showPassword)}>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</span>
						</div>
						<button
							className='block w-full p-3 text-center text-white bg-transparent border-solid border-[1px] border-[#FFFFFF45] hover:bg-[#29d9d5] transition-all duration-500 rounded-md'
							type='submit'>
							Register
						</button>
					</form>
					<div className='flex items-center pt-4 space-x-1'>
						<div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
						<p className='px-3 text-sm text-[#FFFFFF9E]'>Sign up with social accounts</p>
						<div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
					</div>
					<SocialLogin />
					<p className='text-xs text-center sm:px-6 text-[#FFFFFF9E]'>
						Already have an account?
						<Link rel='noopener noreferrer' to='/login' className='ml-1 underline text-[#29d9d5]'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</Slide>
	)
}

export default Register

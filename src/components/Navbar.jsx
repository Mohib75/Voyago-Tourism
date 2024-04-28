import { Link, NavLink } from "react-router-dom"
import Button from "./Button"
import useAuth from "../hooks/useAuth"
import { Fade } from "react-awesome-reveal"
import { useEffect, useState } from "react"

const Navbar = () => {
	const { logout, user } = useAuth()
	const [theme, setTheme] = useState("black")

	// update state on toggle
	const handleToggle = (e) => {
		if (e.target.checked) {
			setTheme("synthwave")
		} else {
			setTheme("black")
		}
	}

	console.log(theme)

	// set theme state in localStorage on mount & also update localStorage on state change
	useEffect(() => {
		localStorage.setItem("theme", theme)
		const localTheme = localStorage.getItem("theme")

		// add custom data-theme attribute
		document.querySelector("html").setAttribute("data-theme", localTheme)
	}, [theme])

	return (
		<div className={`navbar bg-base-100 mt-6 justify-center lg:justify-normal`}>
			<div className='navbar-start !justify-center lg:!justify-start'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</div>
					<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-black rounded-box w-52 items-center gap-2'>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "text-white hover:scale-110 transform transition-all duration-500 text-lg leading-5 px-4 py-2 font-bold"
									: "text-lg leading-5 hover:text-[#29d9d5] hover:scale-110 transform transition-all duration-500 text-[#FFFFFF9E] px-4 py-2"
							}
							to='/'>
							Home
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								isActive
									? "text-white hover:scale-110 transform transition-all duration-500 text-lg leading-5 px-4 py-2 font-bold"
									: "text-lg leading-5 hover:text-[#29d9d5] hover:scale-110 transform transition-all duration-500 text-[#FFFFFF9E] px-4 py-2"
							}
							to='/allTouristsSpot'>
							Tourists Spot
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								isActive
									? "text-white hover:scale-110 transform transition-all duration-500 text-lg leading-5 px-4 py-2 font-bold"
									: "text-lg leading-5 hover:text-[#29d9d5] hover:scale-110 transform transition-all duration-500 text-[#FFFFFF9E] px-4 py-2"
							}
							to='/addTouristsSpot'>
							Add Tourists Spot
						</NavLink>

						{user ? (
							<NavLink
								className={({ isActive }) =>
									isActive
										? "text-white hover:scale-110 transform transition-all duration-500 text-lg leading-5 px-4 py-2 font-bold"
										: "text-lg leading-5 hover:text-[#29d9d5] hover:scale-110 transform transition-all duration-500 text-[#FFFFFF9E] px-4 py-2"
								}
								to='/myList'>
								My List
							</NavLink>
						) : (
							""
						)}

						<label className='cursor-pointer grid place-items-center'>
							<input
								type='checkbox'
								onChange={handleToggle}
								className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 rounded-2xl h-8 w-16'
							/>
							<svg
								className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='14'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
							</svg>
							<svg
								className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='14'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<circle cx='12' cy='12' r='5' />
								<path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
							</svg>
						</label>

						{user ? (
							<>
								<div className='btn btn-ghost btn-circle avatar'>
									<div className='w-10 rounded-full' title={user?.displayName || "username not found"}>
										<img
											alt='Tailwind CSS Navbar component'
											src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
										/>
									</div>
								</div>

								<Button
									className='btn rounded-full bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] text-white text-sm w-[120px] font-semibold leading-5 hover:scale-105 transform transition-all duration-500'
									onClick={logout}>
									Logout
								</Button>
							</>
						) : (
							<>
								<Link to='/login'>
									<Button className='btn rounded-full bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] text-white w-[120px] text-lg font-semibold leading-5 hover:scale-105 transform transition-all duration-500'>
										Login
									</Button>
								</Link>

								<Link to='/register'>
									<Button className='btn rounded-full bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] text-white w-[120px] text-lg font-semibold leading-5 hover:scale-105 transform transition-all duration-500'>
										Register
									</Button>
								</Link>
							</>
						)}
					</ul>
				</div>

				<Fade>
					<Link to='/'>
						<h1 className='text-xl sm:text-3xl font-bold leading-8 text-center sm:text-left logo'>Voyago</h1>
					</Link>
				</Fade>
			</div>

			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal gap-8 items-center'>
					<Fade cascade>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "text-white hover:scale-110 transform transition-all duration-500 text-lg leading-5 px-4 py-2 font-bold"
									: "text-lg leading-5 hover:text-[#29d9d5] hover:scale-110 transform transition-all duration-500 text-[#FFFFFF9E] px-4 py-2"
							}
							to='/'>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "text-white hover:scale-110 transform transition-all duration-500 text-lg leading-5 px-4 py-2 font-bold"
									: "text-lg leading-5 hover:text-[#29d9d5] hover:scale-110 transform transition-all duration-500 text-[#FFFFFF9E] px-4 py-2"
							}
							to='/allTouristsSpot'>
							Tourists Spot
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								isActive
									? "text-white hover:scale-110 transform transition-all duration-500 text-lg leading-5 px-4 py-2 font-bold"
									: "text-lg leading-5 hover:text-[#29d9d5] hover:scale-110 transform transition-all duration-500 text-[#FFFFFF9E] px-4 py-2"
							}
							to='/addTouristsSpot'>
							Add Tourists Spot
						</NavLink>

						{user ? (
							<NavLink
								className={({ isActive }) =>
									isActive
										? "text-white hover:scale-110 transform transition-all duration-500 text-lg leading-5 px-4 py-2 font-bold"
										: "text-lg leading-5 hover:text-[#29d9d5] hover:scale-110 transform transition-all duration-500 text-[#FFFFFF9E] px-4 py-2"
								}
								to='/myList'>
								My List
							</NavLink>
						) : (
							""
						)}
					</Fade>
				</ul>
			</div>

			{user ? (
				<div className='navbar-end gap-4 hidden lg:flex'>
					<Fade delay={2000}>
						<label className='cursor-pointer grid place-items-center'>
							<input
								type='checkbox'
								onChange={handleToggle}
								className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 rounded-2xl h-8 w-16'
							/>
							<svg
								className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='14'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
							</svg>
							<svg
								className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='14'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<circle cx='12' cy='12' r='5' />
								<path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
							</svg>
						</label>

						<div className='dropdown dropdown-end z-30'>
							<div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
								<div className='w-10 rounded-full' title={user?.displayName || "username not found"}>
									<img
										alt='profile pic'
										src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
									/>
									{console.log(user?.photoURL)}
								</div>
							</div>
							<ul tabIndex={0} className='z-50 p-2 shadow menu menu-sm dropdown-content bg-[#17171a] w-40 rounded-lg'>
								<li className='flex items-center'>
									<Button
										className='btn rounded-full bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] text-white text-sm w-[120px] font-semibold leading-5 hover:scale-105 transform transition-all duration-500'
										onClick={logout}>
										Logout
									</Button>
								</li>
							</ul>
						</div>
					</Fade>
				</div>
			) : (
				<div className='navbar-end gap-4 hidden lg:flex'>
					<Fade delay={2000}>
						<label className='cursor-pointer grid place-items-center'>
							<input
								type='checkbox'
								onChange={handleToggle}
								className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 rounded-2xl h-8 w-16'
							/>
							<svg
								className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='14'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
							</svg>
							<svg
								className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='14'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<circle cx='12' cy='12' r='5' />
								<path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
							</svg>
						</label>

						<Link to='/login'>
							<Button className='btn rounded-full bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] text-white w-[120px] text-lg font-semibold leading-5 hover:scale-105 transform transition-all duration-500'>
								Login
							</Button>
						</Link>

						<Link to='/register'>
							<Button className='btn rounded-full bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] text-white w-[120px] text-lg font-semibold leading-5 hover:scale-105 transform transition-all duration-500'>
								Register
							</Button>
						</Link>
					</Fade>
				</div>
			)}
		</div>
	)
}

export default Navbar

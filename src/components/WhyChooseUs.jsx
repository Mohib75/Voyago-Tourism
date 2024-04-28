import { Fade } from "react-awesome-reveal"
import { IoCompassOutline, IoWalletOutline } from "react-icons/io5"
import { TfiHeadphoneAlt, TfiWorld } from "react-icons/tfi"
import { Link } from "react-router-dom"
import Button from "./Button"

const WhyChooseUs = () => {
	return (
		<div className='bg-[#17171a] p-20 flex flex-col items-center rounded-2xl mt-20'>
			<Fade cascade>
				<h3 className='text-xl lg:text-2xl text-[#29d9d5] font-semibold mt-2 text-center'>WHY CHOOSE US</h3>

				<h2 className='text-3xl lg:text-6xl text-white font-bold my-8 text-center'>Countless Experiences</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20 place-items-center my-8'>
					<div className='flex flex-col sm:w-72 bg-black shadow-xl items-center border-[1px] border-[#29d9d5] border-solid sm:h-72 justify-center p-8 gap-4 rounded-2xl'>
						<IoCompassOutline className='text-[#29d9d5] text-5xl' />
						<div className='flex flex-col items-center text-center gap-4'>
							<h2 className='card-title text-white font-bold'>Experienced</h2>
							<p className='text-[#FFFFFF9E] font-extralight leading-6 text-sm'>
								Our service are well known in all over the world. We are very much experienced.
							</p>
						</div>
					</div>

					<div className='flex flex-col sm:w-72 bg-black shadow-xl items-center border-[1px] border-[#29d9d5] border-solid sm:h-72 justify-center p-8 gap-4 rounded-2xl'>
						<TfiWorld className='text-[#29d9d5] text-5xl' />
						<div className='flex flex-col items-center text-center gap-4'>
							<h2 className='card-title text-white font-bold'>Worldwide</h2>
							<p className='text-[#FFFFFF9E] font-extralight leading-6 text-sm'>
								Our service are well known in all over the world. We are famous in all over the world.
							</p>
						</div>
					</div>

					<div className='flex flex-col sm:w-72 bg-black shadow-xl items-center border-[1px] border-[#29d9d5] border-solid sm:h-72 justify-center p-8 gap-4 rounded-2xl'>
						<IoWalletOutline className='text-[#29d9d5] text-5xl' />
						<div className='flex flex-col items-center text-center gap-4'>
							<h2 className='card-title text-white font-bold'>Cheap</h2>
							<p className='text-[#FFFFFF9E] font-extralight leading-6 text-sm'>
								Our service are very cheapest than any other agency in the world. We care a lot about customers comfortness.
							</p>
						</div>
					</div>

					<div className='flex flex-col sm:w-72 bg-black shadow-xl items-center border-[1px] border-[#29d9d5] border-solid sm:h-72 justify-center p-8 gap-4 rounded-2xl'>
						<TfiHeadphoneAlt className='text-[#29d9d5] text-5xl' />
						<div className='flex flex-col items-center text-center gap-4'>
							<h2 className='card-title text-white font-bold'>24/7 Service</h2>
							<p className='text-[#FFFFFF9E] font-extralight leading-6 text-sm'>
								Our service are open 24/7. Whenever you need us, just contact with us.
							</p>
						</div>
					</div>
				</div>

				<Link to='/register' className=''>
					<Button className='block w-[130px] p-3 text-center text-white bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] transition-all duration-500 rounded-full'>
						Register
					</Button>
				</Link>
			</Fade>
		</div>
	)
}

export default WhyChooseUs

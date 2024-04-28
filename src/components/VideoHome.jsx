import { Link } from "react-router-dom"
import Button from "./Button"

const VideoHome = () => {
	return (
		<div className='w-full h-[600px] mt-20 relative'>
			<div className='opacity-20 rounded-2xl h-full w-full'>
				<video className='object-bottom w-full h-full rounded-2xl' autoPlay loop muted playsInline style={{ objectFit: "cover" }}>
					<source src='video-1.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</div>

			<div className='flex flex-col absolute top-0 w-full h-full items-center justify-center gap-6 p-4 sm:p-0'>
				<h2 className='text-xl lg:text-2xl text-[#29d9d5] font-medium text-center'>START YOUR ADVENTURE</h2>
				<h3 className='text-3xl lg:text-6xl text-white font-bold text-center'>Let's Explore This World</h3>
				<p className='text-center text-[#FFFFFF9E] text-sm lg:text-base leading-7'>
					Let's explore this world with us. We will give you the best service. <br /> So, Don't be late. Join the journey with us.{" "}
				</p>
				<Link to='/register'>
					<Button className='block w-[130px] p-3 text-center text-white bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] transition-all duration-500 rounded-full'>
						Register
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default VideoHome

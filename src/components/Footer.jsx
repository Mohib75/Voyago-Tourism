import { Fade, Slide } from "react-awesome-reveal"
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer className='footer footer-center p-10 bg-[#09090a] text-primary-content relative mt-20 border-[#FFFFFF45] border-t-[1px] border-solid'>
			<aside>
				<Fade duration='1500'>
					<h1 className='text-4xl font-bold text-white'>Voyago</h1>
				</Fade>
				<Slide direction='up' duration='1500'>
					<p className='font-light leading-7 text-[#FFFFFF9E]'>
						Voyago Ltd. <br />
						Providing reliable service since 2023
					</p>
				</Slide>

				<Slide direction='down' duration='1500'>
					<p className='text-[#FFFFFF9E]'>Copyright © 2024 - All right reserved</p>
				</Slide>
			</aside>
			<nav>
				<div className='grid grid-flow-col gap-4'>
					<Slide direction='up' duration='2000'>
						<Link to='https://twitter.com/' target='_blank' className='hover:scale-110 transform transition-all duration-500'>
							<FaTwitter className='text-3xl text-[#1DA1F2]' />
						</Link>
					</Slide>
					<Slide direction='down' duration='2000'>
						<Link to='https://web.facebook.com/' target='_blank' className='hover:scale-110 transform transition-all duration-500'>
							<FaFacebookF className='text-3xl text-[#4267B2]' />
						</Link>
					</Slide>
					<Slide direction='up' duration='2000'>
						<Link to='https://www.youtube.com/' target='_blank' className='hover:scale-110 transform transition-all duration-500'>
							<FaYoutube className='text-3xl text-[#FF0000]' />
						</Link>
					</Slide>
				</div>
			</nav>
		</footer>
	)
}

export default Footer

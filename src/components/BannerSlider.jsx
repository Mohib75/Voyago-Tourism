// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules"
import { Typewriter } from "react-simple-typewriter"

const BannerSlider = () => {
	return (
		<>
			<div className='w-full xl:h-[700px] relative rounded-2xl z-[-1]'>
				<Swiper
					spaceBetween={30}
					effect={"fade"}
					navigation={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[EffectFade, Navigation, Pagination, Autoplay]}
					className='mySwiper h-full opacity-40 rounded-2xl z-10'>
					<SwiperSlide>
						<div className='bg-blend-darken'>
							<img
								className='object-bottom w-full'
								src='https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='bg-blend-darken'>
							<img
								className='object-cover w-full'
								src='https://images.pexels.com/photos/6397646/pexels-photo-6397646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='bg-blend-darken'>
							<img
								className='object-cover w-full'
								src='https://images.pexels.com/photos/2161856/pexels-photo-2161856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='bg-blend-darken'>
							<img
								className='object-cover w-full'
								src='https://images.pexels.com/photos/18966516/pexels-photo-18966516/free-photo-of-doane-peak-in-grand-teton-national-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							/>
						</div>
					</SwiperSlide>
				</Swiper>

				<div className='flex flex-col gap-2 sm:gap-8 text-white absolute top-0 w-full justify-center items-center h-full z-10'>
					<h1 className='font-bold text-2xl lg:text-6xl leading-10 text-center'>
						<Typewriter words={["Your Journey Begins"]} loop={false} typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
					</h1>
					<p className='leading-5 lg:leading-8 text-center text-xs px-8 sm:text-sm lg:px-0 lg:text-lg lg:w-[650px]'>
						<Typewriter
							words={[
								"A journey of joy and happiness begins. Where you can enjoy your every moment. The journey of your adventure life begins here with us.",
							]}
							typeSpeed={30}
							deleteSpeed={20}
							delaySpeed={1000}
						/>
					</p>
				</div>
			</div>
		</>
	)
}

export default BannerSlider

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const slides = [
	{
		title: 'Свежие раки в Алматы',
		description: 'Лучшее обслуживание в вашем городе.',
		image: '/portfolio/1.jpg',
	},
	{
		title: 'Лучшие раки в Алматы',
		description: 'Мы ценим каждого клиента.',
		image: '/portfolio/2.jpg',
	},
	{
		title: 'Закажите раков онлайн',
		description: 'Доставка по всему городу.',
		image: '/portfolio/3.jpg',
	},
]

export default function HeroSlider() {
	return (
		<div className='w-full h-screen'>
			<Swiper
				modules={[Autoplay]}
				autoplay={{ delay: 2000, disableOnInteraction: true }}
				loop
				className='w-full h-full'
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div
							className='w-full h-full bg-cover bg-center flex items-center justify-center'
							style={{ backgroundImage: `url(${slide.image})` }}
						>
							<div
								className='p-8 rounded-xl text-white text-center max-w-xl mx-4'
								style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
							>
								<h2 className='text-4xl font-bold mb-4'>{slide.title}</h2>
								<p className='text-lg'>{slide.description}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

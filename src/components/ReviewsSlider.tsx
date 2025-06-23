import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import ReviewCard from './ReviewCard'

import user1 from '/reviews/1.jpg'
import user2 from '/reviews/2.jpg'
import user3 from '/reviews/3.jpg'
import user4 from '/reviews/4.jpg'

const reviews = [
	{
		image: user1,
		name: 'Анна, Алматы',
		text: 'Заказывали раков к семейному празднику — всё супер! Свежайшие, крупные, аромат специй просто потрясающий. Доставка была вовремя, упаковка аккуратная. Спасибо "Королевские Раки", обязательно закажем снова!',
	},
	{
		image: user2,
		name: 'Данияр, Астана',
		text: 'Лучшие раки, что я пробовал в Казахстане. Брал острые — идеально! Видно, что работают с душой. Рекомендую всем гурманам!',
	},
	{
		image: user3,
		name: 'Марина, Шымкент',
		text: 'Очень понравился сервис: быстро, вежливо, вкусно! Заказ оформила через Instagram, сразу перезвонили, уточнили все детали. Раки были горячими и с насыщенным вкусом. 10/10!',
	},
	{
		image: user4,
		name: 'Тимур, Караганда',
		text: 'Королевские действительно! Огромные, сочные, с ароматом лаврового листа и чеснока — просто кайф. Отличный перекус к вечеру с друзьями. Берите — не пожалеете.',
	},
]

const ReviewsSlider = () => {
	return (
		<section id='reviews' className='py-8'>
			<div className='max-w-4xl mx-auto px-4 text-center'>
				<h2 className='text-3xl font-bold mb-10'>Отзывы </h2>

				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={30}
					slidesPerView={1.2}
					loop={true}
					// autoplay={{ delay: 4000 }}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 2000, // ⏱ задержка между слайдами (мс)
						disableOnInteraction: true, // продолжать автопрокрутку после взаимодействия
					}}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2.4 },
						1024: { slidesPerView: 3.2 },
					}}
					className='my-8'
				>
					{reviews.map((review, index) => (
						<SwiperSlide key={index}>
							<ReviewCard {...review} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default ReviewsSlider

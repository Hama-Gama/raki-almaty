import Reveal from '@/components/Reveal'
import { motion } from 'framer-motion'

const About = () => (
	<section id='about' className='relative z-10 py-8 px-6 max-w-4xl mx-auto'>
		<Reveal direction='left'>
			{/* Логотип сразу под слайдером */}
			<div className='w-full flex justify-center mb-6'>
				<img
					src='/logo/logo.jpg'
					alt='Логотип'
					className='w-full max-w-[400px] p-2 object-contain rounded-full shadow-xl'
				/>
			</div>
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className='text-3xl font-semibold mb-4'
			>
				О нас
			</motion.h2>

			<motion.p
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: true }}
				className='text-lg text-gray-900 tracking-wide'
			>
				Компания "Королевские раки" — это ваш надёжный поставщик свежих и
				вкусных раков в Алматы и по всему Казахстану. Мы предлагаем только
				качественных живых и варёных раков, выращенных в экологически чистых
				водоёмах и доставленных в кратчайшие сроки. <br />
				"Королевские раки" — идеальный выбор для уютного ужина, праздника или
				вечеринки с друзьями. Вкус, проверенный временем, и сервис, которому
				можно доверять. <br />
				Свяжитесь с нами — и убедитесь сами!
			</motion.p>
		</Reveal>
	</section>
)
export default About

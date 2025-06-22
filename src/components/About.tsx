import Reveal from '@/components/Reveal'

const About = () => (
	<section id='about' className='relative z-10 py-8 px-6 max-w-4xl mx-auto'>
		<Reveal direction='left'>
			{/* Логотип сразу под слайдером */}
			<div className='w-full flex justify-center'>
				<img
					src='/logo/logo.jpg'
					alt='Логотип'
					className='w-full max-w-[400px] px-4 object-contain rounded-full py-4'
				/>
			</div>
			<h2 className='text-3xl font-semibold mb-4'>О нас</h2>
			<p className='text-base text-gray-900'>
				Компания "Королевские раки" — это ваш надёжный поставщик свежих и
				вкусных раков в Алматы и по всему Казахстану. Мы предлагаем только
				качественных живых и варёных раков, выращенных в экологически чистых
				водоёмах и доставленных в кратчайшие сроки. <br />
				"Королевские раки" — идеальный выбор для уютного ужина, праздника или
				вечеринки с друзьями. Вкус, проверенный временем, и сервис, которому
				можно доверять. Свяжитесь с нами — и убедитесь сами!
			</p>
		</Reveal>
	</section>
)
export default About

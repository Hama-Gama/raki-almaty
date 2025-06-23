import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Work = {
	title: string
	description: string
	price: string
	image: string
}

const works: Work[] = [
	{
		title: 'Мелкий (25-40гр) 28-40шт',
		// description: 'Классические, сочные, с укропом',
		price: '3 000 ₸/кг',
		image: '/portfolio/1.jpg',
	},
	{
		title: 'Средний (40-50гр) 22-25шт',
		// description: 'С чесноком и перцем чили',
		price: '6 000 ₸/кг',
		image: '/portfolio/2.jpg',
	},
	{
		title: 'Крупный (50-80гр) 15-20шт',
		// description: 'Доставка в день заказа',
		price: '8 000 ₸/кг',
		image: '/portfolio/3.jpg',
	},
	{
		title: 'Отборный (80-120гр) 8-12шт',
		// description: 'Доставка в день заказа',
		price: '10 000 ₸/кг',
		image: '/portfolio/4.jpg',
	},
	{
		title: 'Царский (120+) 8-6шт',
		// description: 'Доставка в день заказа',
		price: '15 000 ₸/кг',
		image: '/portfolio/5.jpg',
	},
	{
		title: 'Классическая варка',
		// description: 'Доставка в день заказа',
		price: '1 000 ₸/кг',
		image: '/portfolio/6.jpg',
	},
	{
		title: 'Сливочная варка',
		// description: 'Доставка в день заказа',
		price: '2 000 ₸/кг',
		image: '/portfolio/7.jpg',
	},
]

export default function Products() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<motion.section
			id='products'
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='py-14 px-6 md:px-24 bg-white text-black'
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='text-center mb-6'
			>
				<h2 className='text-3xl md:text-4xl font-bold mb-4'>Наши раки</h2>
				<p className='text-gray-500 max-w-xl mx-auto'>
					Свежесть, которую вы почувствуете с первого укуса
				</p>
			</motion.div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{works.map((work, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.5,
							ease: 'easeOut',
							delay: index * 0.15,
						}}
						className='rounded-xl overflow-hidden shadow-lg bg-white group hover:scale-[1.03] transition-transform duration-300'
					>
						<img
							src={work.image}
							alt={work.title}
							className='rounded-2xl w-full h-64 object-cover p-2'
						/>
						<div className='p-6 text-center tracking-wider'>
							<h3 className='text-xl font-semibold mb-2'>{work.title}</h3>
							<p className='text-base text-gray-500 text-sm mb-2'>{work.description}</p>
							<p className='text-xl text-red-600 font-bold'>{work.price}</p>
						</div>
					</motion.div>
				))}
			</div>
		</motion.section>
	)
}

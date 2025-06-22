import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
	{
		question: 'Как осуществляется доставка раков?',
		answer:
			'Мы доставляем раков по Алматы и ближайшим районам. Заказы оформленные до 18:00, доставляются в течение 2–3 часов. Доступен самовывоз.',
	},
	{
		question: 'Вы продаёте живых или варёных раков?',
		answer:
			'У нас вы можете заказать как живых, так и уже приготовленных (варёных, острых, с укропом) раков. Всё зависит от вашего вкуса!',
	},
	{
		question: 'Какой минимальный заказ?',
		answer:
			'Минимальный объём заказа — 1 кг. При заказе от 3 кг действует скидка или бесплатная доставка (зависит от адреса).',
	},
	{
		question: 'Раки свежие? Как вы это гарантируете?',
		answer:
			'Да, мы работаем только с проверенными поставщиками. Раки доставляются живыми или варятся непосредственно перед отправкой.',
	},
	{
		question: 'Как оплатить заказ?',
		answer:
			'Мы принимаем оплату наличными при получении, через Kaspi и переводом на карту. Онлайн-оплата скоро будет доступна.',
	},
]

export default function Faq() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggle = (index: number) => {
		setActiveIndex(prev => (prev === index ? null : index))
	}

	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='bg-gray-50 text-gray-900 py-10 px-6 md:px-24'
			id='faq'
		>
			<h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>FAQ</h2>

			<div className='max-w-3xl mx-auto space-y-4'>
				{faqs.map((faq, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						className='border border-gray-200 rounded-xl overflow-hidden shadow-sm'
					>
						<button
							onClick={() => toggle(index)}
							className='w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition'
						>
							<span className='font-medium text-lg'>{faq.question}</span>
							<ChevronDown
								className={`transition-transform duration-300 ${
									activeIndex === index ? 'rotate-180' : ''
								}`}
							/>
						</button>

						<AnimatePresence initial={false}>
							{activeIndex === index && (
								<motion.div
									key='content'
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									className='px-4 pb-4 text-gray-600'
								>
									<p>{faq.answer}</p>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</div>
		</motion.section>
	)
}

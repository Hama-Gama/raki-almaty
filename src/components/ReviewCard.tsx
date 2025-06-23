import { Quote } from 'lucide-react'

type ReviewCardProps = {
	image: string
	name: string
	text: string
}

const ReviewCard = ({ image, name, text }: ReviewCardProps) => {
	return (
		<div className='bg-white p-6 rounded-2xl shadow-md relative max-w-md mx-auto text-left mb-8'>
			<Quote className='w-8 h-8 text-gray-400 absolute top-4 right-4' />

			<div className='flex items-center gap-4 mb-4'>
				<img
					src={image}
					alt={name}
					className='w-14 h-14 rounded-full object-cover border border-indigo-100'
				/>
				<h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
			</div>

			<p className='text-gray-600 text-base leading-relaxed'>“{text}”</p>
		</div>
	)
}

export default ReviewCard

import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Faq from '@/components/Faq'
import Products from '@/components/Products'
import ReviewsSlider from '@/components/ReviewsSlider'

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Products />
			<Faq />
			<ReviewsSlider />
			<Contact />
		</div>
	)
}

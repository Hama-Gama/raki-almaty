import About from '@/components/About'
import Testimonials from '@/components/ReviewsSlider'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Products'
import Faq from '@/components/Faq'
import Accordion from '@/components/Accordion'
import Products from '@/components/Products'

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Products />
			<Faq />
			<Accordion />
			<Testimonials />
			<Contact />
		</div>
	)
}

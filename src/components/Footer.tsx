const Footer = () => {
	return (
		<footer className='bg-gray-100 text-[#5d5d5e] py-8 px-4 mt-6 border-t border-gray-200'>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
				{/* Навигация */}
				<nav className='flex flex-wrap justify-center md:justify-start gap-4 text-sm'>
					<a href='#home' className='hover:underline'>
						Главная
					</a>
					<a href='#about' className='hover:underline'>
						О нас
					</a>
					<a href='#products' className='hover:underline'>
						Продукция
					</a>
					<a href='#faq' className='hover:underline'>
						FAQ
					</a>
					<a href='#reviews' className='hover:underline'>
						Отзывы
					</a>
					<a href='#contact' className='hover:underline'>
						Контакты
					</a>
				</nav>

				{/* Логотип или копирайт */}
				<div className='text-center text-xs text-gray-500'>
					© {new Date().getFullYear()} Королевские Раки. Все права защищены.
				</div>
			</div>
		</footer>
	)
}

export default Footer

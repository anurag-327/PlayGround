import Header from '../components/Header'
import Footer from '../components/Footer'
import banner from '../assets/card-banner.png'
import { useEffect } from 'react'

function BlogPost(){
	const tags = ['light jog', 'day 12', 'array']

	useEffect(() => {
		window.scrollTo(0,0)
	}, [])

	return (
		<>
			<Header />
			<div className="flex flex-col p-12">
				<div className="flex">
					{
						tags.map((i, ind) => (
							<p key={ind+''} className="bg-yellow-300 p-2 px-4 font-bold text-xs rounded-full mr-2">
								{i}
							</p>
						))
					}
				</div>
				<p className="ml-1 mt-4 text-gray-500">
					posted on 21st Jan
				</p>
				<h1 className="text-5xl my-1 font-medium">
					Chatting with Alison Roux
				</h1>
				<p className=" text-gray-500 text-lg mt-1">
					Alison Roux is an product designer who started her career in Canada, working for a large architectural firm.
				</p>
				<div className="p-2 my-4 text-center">
					<figure>
						<img src={banner} alt="" />
					</figure>
					<figcaption className="mt-2">
						Photo from Pexels by {' '}
						<a href="#" className="underline">Kalakandi</a>
					</figcaption>
				</div>
				<section className="my-3">
					<h1 className="font-medium text-xl mb-3">
						Introduction
					</h1>
					<p>
						Alison Roux is an product designer who started her career in Canada, working for a large architectural firm. Alison Roux is an product designer who started her career in Canada, working for a large architectural firm. Alison Roux is an product designer who started her career in Canada, working for a large architectural firm.
					</p>
				</section>
			</div>
			<Footer />
		</>
	)
}

export default BlogPost;
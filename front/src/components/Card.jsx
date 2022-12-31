import { Link } from 'react-router-dom'

function Card({ title, summary, bannerURL, createdAt, tags }){

	return (
		<div className="w-4/5 shadow-xl m-auto rounded-xl overflow-hidden my-12">

			<div className="w-full aspect-video bg-[black]">
				<img src={bannerURL} alt="post banner" className="h-full object-cover" />
			</div>

			<div className="p-6 pb-8">
				<p className="ml-1 text-gray-500">
					posted on {createdAt}
				</p>
				<Link to="/blog">
					<h1 className="text-4xl font-medium my-2">
						{title}
					</h1>
				</Link>
				<p className="mb-4">
					{summary}
				</p>
				<div className="flex">
					{
						tags.map((i, ind) => (
							<p key={ind+''} className="bg-yellow-300 p-2 px-4 font-bold text-xs rounded-full mr-2">
								{i}
							</p>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Card
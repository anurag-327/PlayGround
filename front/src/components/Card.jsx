import { Link } from 'react-router-dom'
import banner from "../assets/card-banner.png"
function Card(props){

	const id = props.id
	const title = props.title.replaceAll('_', ' ')
	const summary = props.summary || '';
	const bannerURL= props.data.cover.external.url
	const createdAt= new Date(props.created)
	const queryparams="/blog/"+id
	const tags = props.data.properties.Tags.multi_select.map(i => i.name)

	return (
		<div className="w-full shadow-xl rounded-xl m-auto overflow-hidden cursor-pointer">

			<div className="w-full aspect-video bg-[black] overflow-hidden">
				<img src={bannerURL} alt="post banner" className="w-full object-contain" />
			</div>

			<div className="p-6 pb-8">
				<p className="ml-1 text-gray-500">
					posted on {createdAt.toDateString()}
				</p>
				<Link to={`/blog?id=${id}`}>
					<h1 className="text-2xl font-medium my-2">
						{title}
					</h1>
				</Link>
				<p className="mb-4">
					{summary}
				</p>
				<div className="flex flex-wrap">
					{
						tags.map((i, ind) => (
							<p key={ind+''} className="bg-yellow-300 p-2 px-4 font-bold text-xs rounded-full mr-2 my-1">
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
import { Link } from 'react-router-dom'
import banner from "../assets/card-banner.png"
function Card(props){
    
	const id=props.id;
	const title=props.title;
	const summary=props.summary;
	const bannerURL=banner;
	const createdAt=props.date.slice(0,10);
	const queryparams="/blog/"+id;
	
	
	

	const tags=props.tags.tag;
	// const tags=['light jog', 'day 12', 'array'];

	return (
		<div className="w-4/5 shadow-xl m-auto rounded-xl overflow-hidden my-12 cursor-pointer">

			<div className="w-full sm:aspect-video h-[60vh] bg-[black]">
				<img src={bannerURL} alt="post banner" className="h-full object-cover" />
			</div>

			<div className="p-6 pb-8">
				<p className="ml-1 text-gray-500">
					posted on {createdAt}
				</p>
				<Link to={`/blog?id=${id}`}>
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
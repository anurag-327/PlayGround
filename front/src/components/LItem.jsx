import { Star } from 'phosphor-react'
import barb from '../assets/bitmap_g4487_badge.png'
import alch from '../assets/bitmap_g4495_badge.png'
import grad from '../assets/bitmap_g4491_badge.png'
import mega from '../assets/bitmap_g4499_badge.png'
import cels from '../assets/bitmap_g4503_badge.png'
import legn from '../assets/bitmap_g4507_badge.png'

function LItem(props){

	const rankAvatar = (points) => {
		if(points >= 460)
			return legn
		else if(points >= 260)
			return cels
		else if(points >= 160)
			return mega
		else if(points >= 95)
			return alch
		else if(points >= 45)
			return barb
		return grad
	}

	const avatarURL =  `http://127.0.0.1:8090/api/files/${props.collectionId}/${props.id}/${props.avatar}`;

	return (
		<li className="w-full flex items-center p-3">
			{
				(props.rank < 3)?
				<Star weight="fill" size={25} className={
					(props.rank == 1)? 'fill-yellow-300' : 'fill-zinc-400'
				}/>
				: <p className="px-2 text-lg">{props.rank}</p>
			}
			<div className="w-12 h-12 ml-3 flex">
				<img src={rankAvatar(props.points)} alt="" className="object-cover h-full m-auto"/>
			</div>
			<div className="w-12 h-12 bg-yellow-300 ml-3 overflow-hidden rounded-full">
				<img src={avatarURL} alt="" />
			</div>
			<div className="flex flex-col items-left ml-3">
				<p className="text-lg">{props.username}</p>
				<p className="text-xs italic">{props.name}</p>
			</div>
			<p className="ml-auto">{props.points}</p>
		</li>
	)
}

export default LItem
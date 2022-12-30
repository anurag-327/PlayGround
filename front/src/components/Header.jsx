import { ArrowLeft, List } from "phosphor-react"
import { Link } from 'react-router-dom'
import avatarImage from '../assets/duotone-ashish.jpg'
import logo from '../assets/playground_full.svg'

function Header({ title }){
	const size = 25;

	return (
		<nav className="w-full flex items-center p-3 bg-yellow-300">
			<button className="p-2">
				<Link to="/">
					<ArrowLeft size={size}/>
				</Link>
			</button>
			<h1 className="text-lg font-medium">{title}</h1>
			<Link to="/profile" className="w-12 aspect-square overflow-hidden bg-sky-300 rounded-full ml-auto mr-2">
				<img src={avatarImage} alt="" />
			</Link>
		</nav>
	)	
}

export default Header
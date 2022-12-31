import { ArrowLeft, List } from "phosphor-react"
import { useNavigate, Link } from 'react-router-dom'
import avatarImage from '../assets/duotone-ashish.jpg'
import logo from '../assets/playground_full.svg'

function Header({ title }){
	const size = 25;
	const navigate = useNavigate()
	return (
		<nav className="w-full flex items-center p-3 bg-yellow-300">
			<button 
				className="p-2"
				onClick={() => {
					navigate(-1)
				}}
			>
					<ArrowLeft size={size}/>
			</button>
			<h1 className="text-lg font-medium">{title}</h1>
			<Link to="/profile" className="w-12 aspect-square overflow-hidden bg-sky-300 rounded-full ml-auto mr-2">
				<img src={avatarImage} alt="" />
			</Link>
		</nav>
	)	
}

export default Header
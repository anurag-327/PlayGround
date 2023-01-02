import { ArrowLeft, List, FinnTheHuman } from "phosphor-react"
import { useNavigate, Link } from 'react-router-dom'
import avatarImage from '../assets/duotone-ashish.jpg'
import logo from '../assets/playground_full.svg'
import { pocket } from '../utils/PocketbaseClient'

function Header({ title }){
	let record = null;
	if(pocket.authStore.isValid){
		record = pocket.authStore.model;
	    const avatarURL = `http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${record.avatar}`;
	}

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
			{
				record && <Link to="/profile" className="w-12 aspect-square overflow-hidden bg-yellow-300 rounded-full ml-auto mr-2 border-2 border-[black] flex">
					{
						record?.avatar ?
						<img src={avatarImage} alt={`Avatar image of ${record.name}`} />
						:
						<FinnTheHuman weight="fill" size={25} className="m-auto"/>
					}
				</Link>
			}
		</nav>
	)	
}

export default Header
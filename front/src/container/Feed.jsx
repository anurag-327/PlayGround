import Header from "../components/Header"
import Card from "../components/Card"
import Loader from "../components/Loader"
import Footer from "../components/Footer"
import banner from "../assets/card-banner.png"
import logo from "../assets/playground_full.svg"
import { TrendUp, List, X, User, Flag, ArrowCircleRight } from "phosphor-react"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { pocket } from '../utils/PocketbaseClient'

function Feed(){
	const [ menuState, setMenuState ] = useState(false)

	const cardData = {
	    tags: ['light jog', 'day 12', 'array'],
	    title: 'Chatting with Alison Roux',
	    createdAt: '21st Jan',
	    summary: 'Alison Roux is an product designer who started her career in Canada, working for a large architectural firm.',
	    bannerURL: banner
	}

	function rendercomponents()
	{
		if(pocket.authStore.isValid)
		{
			return( <Link 
					to="/profile" 
					preventScrollReset={true} 
					className="flex items-center"
				>
					<User className="mr-1" weight="fill" size={22}/>
					Profile
				</Link>
				)
		}
		else{
			return(
			<Link 
				to="/login"
				preventScrollReset={true} 
				className="flex items-center"
			>
				<ArrowCircleRight className="mr-1" weight="fill" size={22}/>
				Login
			</Link>,
			<Link 
				to="/login"
				preventScrollReset={true} 
				className="flex items-center"
			>
				<ArrowCircleRight className="mr-1" weight="fill" size={22}/>
				Login
			</Link>)
		}
	}
	
	return (
		<div className="relative">
			<header className="w-full flex items-center p-3">
				<img src={logo} alt="" className="h-6"/>
				<button className="ml-auto p-2" onClick={() => {
					setMenuState(!menuState);
				}}>
					{
						!menuState?
						<List size={25} />
						: <X size={25}/>
					}
				</button>
			</header>
			{
				menuState &&
				<div className="w-full">
					<div className="flex text-xl bg-yellow-300 py-6 mb-6">
					<ul className="flex m-auto flex-col items-start">
						<li className="my-2">
							<Link to="/leaderboard" className="flex items-center">
								<Flag weight="fill" className="mr-1" size={20}/>
								Leaderboard
							</Link>
						</li>
						<li className="my-2">
							{/* {rendercomponents()} */}
							{
								
								pocket.authStore.isValid?
								<Link 
									to="/profile" 
									preventScrollReset={true} 
									className="flex items-center"
								>
									<User className="mr-1" weight="fill" size={22}/>
									Profile
								</Link>
								:([
								<Link 
									to="/login"
									preventScrollReset={true} 
									className="flex items-center"
								>
									<ArrowCircleRight className="mr-1" weight="fill" size={22}/>
									Login
								</Link>,
								<Link 
									to="/signup"
									preventScrollReset={true} 
									className="flex items-center"
								>
									<ArrowCircleRight className="mr-1" weight="fill" size={22}/>
									Sign Up
								</Link>])
								
							}
						</li>
					</ul>
					</div>
				</div>
			}
			<ul>
			{
		      Array(4).fill('').map((i, ind) => (<Card key={ind+''} {...cardData}/>))
		    }
		    </ul>
		    <Footer />
		</div>
	)
}

export default Feed
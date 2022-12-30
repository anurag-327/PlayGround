import Header from "../components/Header"
import Card from "../components/Card"
import Loader from "../components/Loader"
import Footer from "../components/Footer"
import banner from "../assets/card-banner.png"
import logo from "../assets/playground_full.svg"
import { RssSimple, List, X } from "phosphor-react"
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Feed(){
		const [ menuState, setMenuState ] = useState(false)

	  const cardData = {
	    tags: ['light jog', 'day 12', 'array'],
	    title: 'Blog Post title',
	    createdAt: '21st Jan',
	    summary: 'A well defined summary',
	    bannerURL: banner
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
					<ul className="flex flex-col items-center text-lg bg-yellow-300 py-6 underline mb-6">
						<li className="my-1">
							<Link to="/leaderboard">
								Leaderboard
							</Link>
						</li>
						<li className="my-1">
							<Link to="/profile">
								Profile
							</Link>
						</li>
					</ul>
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
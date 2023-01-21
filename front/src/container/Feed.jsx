import Header from "../components/Header"
import Card from "../components/Card"
import Module from "../components/Module"
import Loader from "../components/Loader"
import Footer from "../components/Footer"
import banner from "../assets/card-banner.png"
import logo from "../assets/playground_full.svg"
import { TrendUp, List, X, User, Flag, ArrowCircleRight, CodepenLogo } from "phosphor-react"

import { Link } from 'react-router-dom'
import { pocket } from '../utils/PocketbaseClient'
import { useEffect, useState } from 'react'
function Feed()
{
	const [ menuState, setMenuState ] = useState(false)
	const [ blogs, setblogs ] = useState([])
    const [ isloading , setisloading ]= useState(true);
    const [ ErrorMessage , setErrorMessage ]= useState(false);


	useEffect(() => {
		(async function(){
			try{
				let r = await pocket.collection('blog_content').getFullList(200,{
					sort: '-created',
				})
				setblogs(r);	
				setisloading(false);
				setErrorMessage(null);
			}
			catch(err)
			{
				console.log(err);
				setErrorMessage(true);
                setisloading(false);
			}
			
			
		}())
	}, [])


	const blog = [
		{
			id:4,
			tags: ['light jog', 'day 12', 'array'],
			title: 'Day 4 Hard Array Questions',
			createdAt: '19th Jan',
			summary: 'Array Hard Questions.',
			bannerURL: banner
		},
		{
			id:3,
			tags: ['light jog', 'day 12', 'array'],
			title: 'Day 3 medium Array Questions',
			createdAt: '18th Jan',
			summary: 'Array Medium Questions.',
			bannerURL: banner
		},
		{
			id:2,
			tags: ['light jog', 'day 12', 'array'],
			title: 'Day 2 Easy Array Questions',
			createdAt: '17th Jan',
			summary: 'Array Easy Questions.',
			bannerURL: banner
		},
		{
			id:1,
	        tags: ['light jog', 'day 12', 'array'],
	        title: 'Day 1 Introduction to arrray',
	        createdAt: '16th Jan',
	        summary: 'Basic Introduction to array.',
	        bannerURL: banner
	   }		
]

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
								:(
								<Link 
									to="/signup"
									preventScrollReset={true} 
									className="flex items-center"
								>
									<ArrowCircleRight className="mr-1" weight="fill" size={22}/>
									Login
								</Link>)
								
							}
						</li>
					</ul>
					</div>
				</div>
			}
<<<<<<< HEAD
			<Module />
			<ul>
=======
>>>>>>> 3b302c4576862f80c62aa895206faddeaea7793a
			{
                ErrorMessage ?(<div>Could Not Fetch data</div>) : (isloading ? (<div className="relative mb-96 mt-32 "><Loader /></div> ):(
					<ul>
					{
					 
						blogs.map((data) => (<Card key={data.id} {...data}></Card>))
					}
					</ul>))
			}
            
			
		    <Footer />
		</div>
	)
}

export default Feed
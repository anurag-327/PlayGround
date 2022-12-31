import Footer from '../components/Footer'
import logo from '../assets/playground_full.svg'
import { Confetti, ArrowLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

function Login(){
	const navigate = useNavigate();

	return (
		<>
		<header className="w-full p-4 flex">
			<button className="p-1 items-center flex" onClick={() => {
				navigate(-1)
			}}>
				<ArrowLeft size={20} className="mr-2" />
				back
			</button>
		</header>
		<div className="w-full h-full my-16 flex">
			<div className="m-auto w-4/5 overflow-hidden p-12 rounded-lg shadow-xl">
				<h1 className="text-center text-lg">
					Join
					<img src={logo} alt="" className="my-4" />
				</h1>
				<form className="flex flex-col w-full">
					<label className="flex flex-col my-4 tracking-wide">
					    email:
						<input type="text" name="email" id="email" className="border-b-2 mt-2 outline-0 p-1" />
					</label>
					<label className="flex flex-col my-4 tracking-wide">
						password:
						<input type="password" name="pawssword" id="password" className="border-b-2  mt-2 outline-0 p-1"/>
					</label>
					<button type="submit" className="bg-yellow-300 font-lg font-bold p-4 mt-4 rounded uppercase flex">
						<p className="flex m-auto items-center">
							hop in!
							<Confetti weight="fill" size={20}/>
						</p>
					</button>
				</form>
			</div>
		</div>
		<Footer />
		</>
	)
}

export default Login
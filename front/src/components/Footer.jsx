import logo from '../assets/playground_full.svg'

function Footer(){
	return (
		<footer className="w-full bg-yellow-300 py-12">
			<div className="w-full p-12">
				<img src={logo} alt="" />
			</div>
			<div className="w-full px-12 flex items-center">
				<p className="underline mr-4">About</p>
				<p>Created in 2022.</p>
			</div>
		</footer>
	)
}

export default Footer
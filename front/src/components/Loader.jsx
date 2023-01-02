import { CircleNotch } from 'phosphor-react'

function Loader(){
	return (
		<div className="absolute inset-0 w-full h-full flex bg-yellow-300">
			<CircleNotch size={30} weight="bold" className=" animate-spin m-auto"/>
		</div>
	)
}

export default Loader
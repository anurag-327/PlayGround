import { CircleNotch } from 'phosphor-react'

function Loader(){
	return (
		<div className="absolute w-full h-full bg-[white] flex">
			<CircleNotch weight="bold" className=" animate-spin m-auto"/>
		</div>
	)
}

export default Loader
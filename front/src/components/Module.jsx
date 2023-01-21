import banner from '../assets/Garden_Walk.png'
import { Star } from 'phosphor-react'

function Module(){
	return (
		<div className="w-[300px] overflow-hidden rounded-xl shadow-xl relative">
			<img src={banner} alt="" />
			<div className="p-3 px-6">
				<h1 className="font-medium text-lg flex items-center">
					Arrays and String
					<button className="ml-auto p-1">
						<Star weight="fill"/>
					</button>
				</h1>
				<p>Garden Walk</p>
			</div>
		</div>
	)
}

export default Module
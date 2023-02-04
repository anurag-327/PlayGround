import banner from '../assets/Garden_Walk.png'
import { Star } from 'phosphor-react'

function Module(){
	return (
		<li className="min-w-[250px] max-w-[250px] overflow-hidden rounded-xl shadow-xl relative">
			<div className="w-full aspect-video overflow-hidden">
				<img src={banner} alt="" className="scale-125" />
			</div>
			<div className="p-3 px-6">
				<h1 className="font-medium text-lg flex items-center">
					Arrays and String
					<button className="ml-auto p-1">
						<Star weight="fill"/>
					</button>
				</h1>
				<p className="italic">Garden Walk</p>
			</div>
		</li>
	)
}

export default Module
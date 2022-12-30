import badgeImage from "../assets/legend_2_star.png"
import { TrendUp } from "phosphor-react"

function Badge(){
	return (
		<div className="flex flex-col py-3">
			<h1 className="flex items-center px-4 text-lg italics">
				<TrendUp weight="bold" size={20} className="mr-2"/>
				Current level -
			</h1>

			<div className="w-[160px] aspect-square m-auto my-8">
				<img src={badgeImage} alt="" className=""/>
			</div>

			<div className="italic m-auto">
				Next level - Legend 3 star
			</div>
		</div>
	)
}

export default Badge
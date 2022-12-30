import { CircleWavyCheck, Star } from "phosphor-react"
import userImage from "../assets/duotone-ashish.jpg"

function Profile({ id, avatarURL, name, username, created }){
	const months = [
	    "Jan",
	    "Feb",
	    "Mar",
	    "Apr",
	    "May",
	    "Jun",
	    "Jul",
	    "Aug",
	    "Sep",
	    "Oct",
	    "Nov",
	    "Dec"
	]
	const date = new Date(created).toLocaleDateString().split('/');
	return (
		<div className="w-full flex py-6">
			<div id="metaData" className="flex items-center m-auto">

				<div className="w-[120px] h-[120px] overflow-hidden rounded-full border">
					<img src={avatarURL} alt="User image." />
				</div>

				<div className="flex flex-col text-sm ml-3">
					<h1 className="uppercase font-bold text-4xl flex items-end">
						{username}
						<CircleWavyCheck weight="fill" size={36}/>
					</h1>
					<div>
						<p>{name}</p>
						<p className="flex items-center">
							Legend 2 {' '}
							<Star weight="fill" size={15}/>
						</p>
						<p className="italic">
							Joined {
								months[date[1] - 1] + ' ' + date[2]
							}
						</p>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Profile
import Header from '../components/Header'
import LItem from '../components/LItem'
import Footer from '../components/Footer'
import banner from '../assets/banner.jpg'
import { pocket } from '../utils/PocketbaseClient'
import { useEffect, useState } from 'react'

function LeaderBoard(){
	const [ users, setUsers ] = useState([])

	function sortList(arr){
		for(let i =0 ;i<arr.length;i++){
			for(let j=i+1; j<arr.length;j++){
				if(arr[i].points < arr[j].points){
					let temp = arr[i]
					arr[i] = arr[j]
					arr[j] = temp
				}
			}
		}
		return arr
	}

	useEffect(() => {
		(async function(){
			let r = await pocket.collection('points_table').getFullList(200)
			r = sortList(r)
			setUsers(r)
		}())
	}, [])

	return (
		<div className="w-full flex flex-col">
			<Header title="LeaderBoard"/>
			<ul className="p-4">
				{
					users.map((i, ind) => (
						<LItem key={i.id} rank={ind+1} {...i}/>
					))
				}
			</ul>
			<Footer />
		</div>
	)
}

export default LeaderBoard
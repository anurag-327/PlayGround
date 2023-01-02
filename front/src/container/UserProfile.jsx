import Header from "../components/Header"
import Profile from "../components/Profile"
import Badge from "../components/Badge"
import Footer from "../components/Footer"
import HR from '../components/HR.jsx'
import { useState, useEffect } from "react"
import { pocket } from "../utils/PocketbaseClient.js"
import { useNavigate } from "react-router-dom"



function UserProfile(){
	const [ userData, setUserData ] = useState(null)
	const navigate = useNavigate();

	useEffect( ()=> {
		if(!pocket.authStore.isValid){ navigate('/') }
		else {
	    	const record = pocket.authStore.model;
	        const avatarURL = `http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${record.avatar}`;
		    setUserData({...record, avatarURL})
		}
	}, [])

	return (
		<>
	      <Header title="Profile"/>
	      <div className="w-full flex px-6 pt-2">
		      <button 
		      	className="bg-yellow-300 p-2 px-6 rounded my-2 ml-auto font-medium"
		      	onClick={() => {
			      	pocket.authStore.clear();
			      	navigate('/login');
		      }}>
		      	Log out
		      </button>
		  </div>
	      <Profile {...userData}/>
	      <HR />
	      <Badge />
	      <Footer />
	    </>
	)
}

export default UserProfile
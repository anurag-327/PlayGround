import Header from "../components/Header"
import Profile from "../components/Profile"
import Badge from "../components/Badge"
import Footer from "../components/Footer"
import HR from '../components/HR.jsx'
import { useState, useEffect } from "react"
import { pocket } from "../utils/PocketbaseClient.js"



function UserProfile(){
	const [ userData, setUserData ] = useState(null)


  useEffect( ()=> {
	    (async function(){
	      const { record } = await pocket.collection('users').authWithPassword('flangdev3000@gmail.com', '1234567890');
	      const avatarURL = `http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${record.avatar}`;
	      setUserData({...record, avatarURL})
	    }())
	  }, [])

	return (
		<>
	      <Header title="Profile" />
	      <Profile {...userData}/>
	      <HR />
	      <Badge />
	      <Footer />
	    </>
	)
}

export default UserProfile
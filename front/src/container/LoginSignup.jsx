import Footer from '../components/Footer'
import Loader from '../components/Loader'
import logo from '../assets/playground_full.svg'
import Error from "../container/Error"
import ErrorMessage from "../components/ErrorMessage"
import { Confetti, ArrowLeft, Eye, EyeSlash, Warning } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { pocket } from '../utils/PocketbaseClient'

function LoginSignup()
{
    function handleSubmit(e){
		let { email, password } = e.target;
		email = (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm.exec(email.value));
		if(email){ email = email[0] }
		else {
			setEmailErrorMessage('Invalid email address.')
			setEmailError(!emailError);
			e.target.email.focus();
			// navigate("/error");
			return;
		}
		password = password.value.replace(' ','');
		if(password.length === 0 && password.length < 8) {
			setPasswordErrorMessage('Invalid password length')
			setPasswordError(!emailError);
			e.target.password.focus();
			// navigate("/error");
			return;
		}
		e.target.reset();
		setIsLoading(true);
		handleLogin(email, password);
		return [email, password];
	}

	async function handleLogin(email, password){
		let authData;
		let data={
			"email":email,
			"password":password
		}
		try{
			console.log("before auth");
			authData = await pocket.collection('users').create({
			    "email": email,
			    "emailVisibility": true,
			    "password": password,
			    "passwordConfirm": password,
			    "name": email.substring(0,email.indexOf("@")),
			    "username": email.substring(0,email.indexOf("@"))
			})
			authData = await pocket.collection('users').authWithPassword(email, password);
			console.log("after auth");
			navigate("/error")
		} catch(err){
			console.log("catch");
			console.log("error1",err)
			try{
				authData = await pocket.collection('users').authWithPassword(email, password);
				navigate("/");
			}
			catch(error)
			{
				console.log("error2",error)
				navigate('/error')
			}
		}
		return true
	}

	function debounce(fn, ms){
		let timerID;
		return function(){
			clearTimeout(timerID)
			timerID = setTimeout(() => {
				fn()
			}, ms)
		}
	}

   return(
    <>
    <header className="w-full p-4 flex">
			<button className="p-1 items-center flex" onClick={() => {
				if(pocket.authStore.isValid){ navigate('/') }
				else{ navigate(-1) }
			}}>
				<ArrowLeft size={20} className="mr-2" />
				back
			</button>
		</header>

        <div className="w-full h-full my-16 flex relative">
			<div className="m-auto w-4/5 overflow-hidden p-12 rounded-lg relative shadow-xl">
				{ 
					 <Loader /> 
				}
				<h1 className="text-center text-lg">
					Join
					<img src={logo} alt="" className="my-4" />
				</h1>
				<form 
					className="flex flex-col w-full"
					onSubmit={(e) => {
						e.preventDefault();
						debounce(() => {
							console.log("in debounce")
							handleSubmit(e)
						}, 500)()
					}}
				>
					<label className="flex flex-col my-4 tracking-wide">
						<h2 className="flex items-center">
					    	email:
					    	{
					    		emailError && <ErrorMessage message={emailErrorMessage}/>
					    	}
					    </h2>
						<input type="text" name="email" id="email" className="border-b-2 mt-2 outline-0 p-1" />
					</label>
					<label className="flex flex-col my-4 tracking-wide">
						<h2 className="flex items-center">
							password:
							{
								passwordError && <ErrorMessage message={passwordErrorMessage}/>
							}
						</h2>
						<div className="flex items-center">
							<input 
								type={
									showPassword ? 'password' : 'text'
								} 
								name="pawssword" 
								id="password" 
								className="border-b-2 w-full mt-2 outline-0 p-1"
							/>
							<a 
								className="flex m-auto cursor-pointer"
								onClick={debounce(() => {
									setShowPassword(!showPassword)
								}, 200)}
							>
								{
									showPassword?
									<Eye size={25} weight="fill" className="mx-1"/>
									: <EyeSlash size={25} weight="fill" className="mx-1"/>
								}
							</a>
						</div>
					</label>
					<button type="submit" className="bg-yellow-300 font-lg font-bold p-4 mt-4 rounded uppercase flex">
						<p className="flex m-auto items-center">
							hop in!
							<Confetti weight="fill" size={20}/>
						</p>
					</button>
					<Link to="/signup">alreay a member ju</Link>
				</form>
			</div>
		</div>
    
    <Footer />
    </>
   )
}

export default LoginSignup
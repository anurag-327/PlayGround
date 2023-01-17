import Header from '../components/Header'
import Footer from '../components/Footer'
import banner from '../assets/card-banner.png'
import { useSearchParams } from 'react-router-dom';
import Loader from "../components/Loader"
import queryString from 'query-string'
import { useEffect, useState } from 'react'



function BlogPost(props){
	const [ isloading , setisloading ]= useState(true);
	const [ blog , setblog ]= useState(null);
	const [ ErrorMessage , setErrorMessage ]= useState(false);
	//accessing id of note to be accessed
	const [searchParams] = useSearchParams(); 
	let ids;
	for (const entry of searchParams.entries()) 
	{
	const [param, value] = entry;
	ids=value;
    }


    const getnotes = async (ids) =>
    {
	console.log("id",ids)
	const url=`http://localhost:8090/api/collections/blog_content/records/${ids}`;
	console.log(url)
	fetch(url)
			.then(res => {
				if(!res.ok)
				{
					throw Error("Could not fetch data")
				}
				return res.json();
			}).then((data) =>
			{
				console.log(data)
				 setblog(data);
				 setisloading(false);
				 setErrorMessage(null);
			})
			.catch(err =>
				{
					setErrorMessage(true);
					setisloading(false);
				})
	}
    
						
	useEffect(() => 
	{
		window.scrollTo(0,0);
		getnotes(ids);
	}, [])
  
    
	

	return (
		<>
			<Header />
			{
				ErrorMessage ?(<div>Could Not Fetch data</div>) :(isloading ? (<div className="relative mb-96 mt-32 "><Loader /></div> ):(
					<div className="flex flex-col p-12">
					<div className="flex">
						{
							blog.tags.tag.map((i, ind) => (
								<p key={ind+''} className="bg-yellow-300 p-2 px-4 font-bold text-xs rounded-full mr-2">
									{i}
								</p>
							))
						}
					</div>
					<p className="ml-1 mt-4 text-gray-500">
						posted on {blog.date.slice(0,10)}
					</p>
					<h1 className="text-5xl my-1 font-medium">
						{blog.title}
					</h1>
					<p className=" text-gray-500 text-lg mt-1">
						{blog.summary} 
					</p>
					<div className="p-2 my-4 text-center">
						<figure>
							<img src={banner} alt="" />
						</figure>
						<figcaption className="mt-2">
							Photo from Pexels by {' '}
							<a href="#" className="underline">Kalakandi</a>
						</figcaption>
					</div>
					<section className="my-3">
						<h1 className="font-medium text-xl mb-3">
							Introduction
						</h1>
						<p>
							Alison Roux is an product designer who started her career in Canada, working for a large architectural firm. Alison Roux is an product designer who started her career in Canada, working for a large architectural firm. Alison Roux is an product designer who started her career in Canada, working for a large architectural firm.
						</p>
					</section>
				</div>	
				)
				)
			}
			

			<Footer />
		</>
	)
}

export default BlogPost;
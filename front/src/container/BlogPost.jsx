import Header from '../components/Header'
import Footer from '../components/Footer'
import banner from '../assets/card-banner.png'
import { useSearchParams } from 'react-router-dom';
import Loader from "../components/Loader"
import queryString from 'query-string'
import { useEffect, useState } from 'react'

import { pocket } from '../utils/PocketbaseClient'


function BlogPost(props){
	const [ isloading , setIsloading ]= useState(true);
	const [ blog , setBlog ]= useState(null);
	const [ ErrorMessage , setErrorMessage ]= useState(false);

	//accessing id of note to be accessed
	const [searchParams] = useSearchParams(); 
	let ids;
	for (const entry of searchParams.entries()) 
	{
		const [param, value] = entry;
		ids = value;
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
		// getnotes(ids);
		(async () => {
			try{
				const { data } = await pocket.collection('30_day_garden_walk').getOne(ids);
				setBlog(data)
				setIsloading(false);
				setErrorMessage(null);
			} catch(err){
				console.log(err)
			}
		})()
	}, [])
  
    
	

	return (
		<>
			<Header />
			{
				ErrorMessage ?(<div>Could Not Fetch data</div>) :(isloading ? (<div className="relative mb-96 mt-32 "><Loader /></div> ):(
					<div className="flex flex-col p-12">
					<div className="flex">
						{
							blog.properties.Tags.multi_select.map((i, ind) => (
								<p key={ind+''} className="bg-yellow-300 p-2 px-4 font-bold text-xs rounded-full mr-2">
									{i.name}
								</p>
							))
						}
					</div>
					<p className="ml-1 mt-4 text-gray-500">
						posted on {new Date(blog.created_time).toDateString()}
					</p>
					<h1 className="text-5xl my-1 font-medium">
						{blog.properties.Title.title[0].plain_text}
					</h1>
					<p className=" text-gray-500 text-lg mt-1">
						{blog.summary || 'summary'} 
					</p>
					<div className="my-4 text-center w-full aspect-video overflow-hidden rounded-md">
						<img src={blog.cover.external.url} alt="" />
					</div>
					<section className="my-3">
						<h1 className="font-medium text-xl mb-3">
							Introduction
						</h1>
						{	
							blog.results.map(i => (
								<p key={i.id} className="my-4">
									{i[i.type].rich_text[0].text.content}
								</p>
							))
						}
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
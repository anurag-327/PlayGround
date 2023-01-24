import PocketBase from 'pocketbase';
import * as dotenv from 'dotenv'
dotenv.config()
const { ADMIN_ACC_EMAIL, ADMIN_ACC_PASSWORD } = process.env;

const pb = new PocketBase('http://127.0.0.1:8090');

function snakify(string){
	return string.replaceAll(' ','_').toLowerCase()
}

async function make_record(database_name, title, data){
	try{
		const record = await pb.collection(database_name).getFirstListItem(`title="${title}"`);
		await pb.collection('30_day_garden_walk').update(record.id, {
			data: data
		});
	} catch(err){
		console.log('\n\n\n' + err)
		const record = await pb.collection(database_name).create({
		    title: title,
		    data: data
		});
	}
}

export async function create_database(module_data, pages){
	const authData = await pb.admins.authWithPassword(ADMIN_ACC_EMAIL, ADMIN_ACC_PASSWORD);

	const database_name = snakify(module_data['title'][0]['plain_text']);
	console.log(database_name)

	try {
		const collection = await pb.collections.create({
		    name: database_name,
		    type: 'base',
		    schema: [
		        {
		            name: 'title',
		            type: 'text',
		            required: true,
		        },
		        {
		            name: 'data',
		            type: 'json',
		            required: true,
		        },
		    ],
		});
		console.log('Database created.')		
	} catch(err) {
		switch(err.status){
			case 400:
				console.log(database_name, err['data']['data']['name']['code'].replaceAll('_', ' '));
				break;
			default:
				console.log(err);
		}
	}

	await make_record(database_name, 'index', module_data)

	for(let i = 0; i< pages.length; i++){
		await make_record(
			database_name,
			snakify(pages[i]['properties']['Title']['title'][0]['plain_text']),
			pages[i].results
		)
	}

	console.log('Database hydrated.')
}
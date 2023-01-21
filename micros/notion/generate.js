const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client')
const fs = require('fs');

let pageData = {};
const notion = new Client({ auth: process.env.NOTION_TOKEN });

const databaseId = process.env.NOTION_DATABASE_ID;

async function getDatabase(databaseId){
	const response = await notion.databases.query({
		database_id : databaseId,
	});
	return response.results;
}

async function getPages(arrayOfPages){
	let response = [];
	for(let j = 0; j< arrayOfPages.length; j++){
		const r = await notion.blocks.children.list({
			block_id: arrayOfPages[j].id,
			page_size: 50
		})
		console.log(r)
		response.push({
	  			'object': r.object,
	  			'id' : r.id,
	  			'parent' : r.parent,
	  			'type' : r.type,
	  			'data' : r[r.type]
  			})
	}
	return response;
}

(async () => {
	let r = await getDatabase(databaseId);
	// r = await getBlocks(r)
	console.log(r)
})()

// querying database
//
// (async () => {
//   const response = await notion.databases.query({
//     database_id: databaseId
//   });
//   response.results.forEach(i => {
//   		const title = i.properties.Title.title[0].text.content
//   		console.log(title, i, '\n\n\n');
//   })
// })();

// const pageId = '8f44bbfb-a0ea-4ca6-9f7b-9661010ea4a6';
// pageData['page_id'] = pageId;

// (async () => {
//   const response = await notion.blocks.children.list({
//     block_id: pageId,
//     page_size: 50,
//   });
//   	pageData['blocks'] = response.results.map(i =>	({
// 	  			'object': i.object,
// 	  			'id' : i.id,
// 	  			'parent' : i.parent,
// 	  			'type' : i.type,
// 	  			'data' : i[i.type]
//   			})
//   		);

// 	console.log(pageData)

//   	fs.writeFile('day_1.json', JSON.stringify(pageData), function (err) {
// 	  if (err) throw err;
// 	  console.log('Saved!');
// 	});
// })();

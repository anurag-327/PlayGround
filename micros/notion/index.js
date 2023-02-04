import fs from 'fs'
import { Client } from '@notionhq/client'
import { create_database } from './pocket.js'
import * as dotenv from 'dotenv'
dotenv.config()

const notion = new Client({ auth: process.env['NOTION_KEY'] });

let module_data = {};
let pages_data = [];

async function getPages() {

    const database_id = process.env['NOTION_DATABASE_ID']

    const r = await notion.databases.query({
        database_id: database_id
    })
    const c = await notion.databases.retrieve({
        database_id: database_id
    })


    module_data = {...r, ...c};
    pages_data = r;
    fs.writeFile('./data.json', JSON.stringify({...r, ...c}), () =>{
        console.log('printed')
    })

    return r.results;
}

async function getPageData(pages) {
    for (let i = 0; i < pages.length; i++) {

        let r = await notion.blocks.children.list({
            block_id: pages[i].id,
            page_size: 50
        })

        let c = await notion.pages.retrieve({ 'page_id': pages[i].id });


        pages_data.results[i] = {...r, ...c}

        fs.writeFile(`./page-${pages[i].id}.json`, JSON.stringify(pages_data.results[i]), () =>{
            console.log('printed')
        })
    }

    return pages;
}

(async () => {
    let pages = await getPages()
    await getPageData(pages)
    // console.log(module_data, pages_data)
    // module_data && pages_data['results']
    await create_database(module_data, pages_data['results'])
})()
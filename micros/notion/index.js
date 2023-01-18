const fs = require('fs')
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env['NOTION_KEY'] });

let filesData = {
    module_name: '',
    files: []
};

async function getPages(databaseId) {
    const r = await notion.databases.query({
        database_id: databaseId
    })
    const c = await notion.databases.retrieve({
        database_id: process.env['NOTION_DATABASE_ID']
    })
    filesData['module_name'] = c['title'][0]['plain_text'];
    return r.results
}

async function getPageData(pages) {
    for (let i = 0; i < pages.length; i++) {
        let r = await notion.blocks.children.list({
            block_id: pages[i].id,
            page_size: 50
        })
        let page_title = pages[i]['properties']['Title']['title'][0]['text']['content'];
        let page_id = pages[i].id;
        filesData['files'].push({
            page_title: page_title,
            page_id: page_id
        });
        fs.writeFile('data/blogs/'+pages[i].id + '.json',
            JSON.stringify(r.results),
            (err, file) => {
                if (err) throw err;
                console.log('Saved!')
            }
        )
    }
    fs.writeFile('data/filesData.json', JSON.stringify(filesData), (err, file) => {
        if (err) throw err;
        console.log('Saved!');
    })
}

(async () => {
    let pages = await getPages(process.env['NOTION_DATABASE_ID'])
    await getPageData(pages)
})()
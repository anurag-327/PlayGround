migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4dsbnf43fppctzy");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4dsbnf43fppctzy",
    "created": "2022-12-28 16:38:23.030Z",
    "updated": "2022-12-28 16:38:23.030Z",
    "name": "images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yvxtw6af",
        "name": "image",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})

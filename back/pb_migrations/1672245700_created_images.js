migrate((db) => {
  const collection = new Collection({
    "id": "kuy9depzojymsfs",
    "created": "2022-12-28 16:41:40.259Z",
    "updated": "2022-12-28 16:41:40.259Z",
    "name": "images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "paawtwan",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kuy9depzojymsfs");

  return dao.deleteCollection(collection);
})

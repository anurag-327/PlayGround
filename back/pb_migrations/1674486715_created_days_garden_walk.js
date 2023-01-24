migrate((db) => {
  const collection = new Collection({
    "id": "2zej0hiqvld8u6e",
    "created": "2023-01-23 15:11:55.674Z",
    "updated": "2023-01-23 15:11:55.674Z",
    "name": "days_garden_walk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pxikp87v",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 10,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ohvemf9f",
        "name": "status",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2zej0hiqvld8u6e");

  return dao.deleteCollection(collection);
})

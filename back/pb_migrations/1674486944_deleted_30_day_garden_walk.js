migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dtiz4lp35aqeytx");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "dtiz4lp35aqeytx",
    "created": "2023-01-23 15:15:01.691Z",
    "updated": "2023-01-23 15:15:01.691Z",
    "name": "30_day_garden_walk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "meqjdpnf",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5scwlxaa",
        "name": "data",
        "type": "json",
        "required": true,
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
})

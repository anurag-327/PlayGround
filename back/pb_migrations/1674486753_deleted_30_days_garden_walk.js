migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gm7zlbhphy64ira");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "gm7zlbhphy64ira",
    "created": "2023-01-23 15:12:06.837Z",
    "updated": "2023-01-23 15:12:06.837Z",
    "name": "30_days_garden_walk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "opijs0hq",
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
        "id": "4ucei7xs",
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
})

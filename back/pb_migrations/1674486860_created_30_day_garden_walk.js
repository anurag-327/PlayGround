migrate((db) => {
  const collection = new Collection({
    "id": "rmlybawc6kxe2lb",
    "created": "2023-01-23 15:14:20.847Z",
    "updated": "2023-01-23 15:14:20.847Z",
    "name": "30_day_garden_walk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "daofygkj",
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
        "id": "vfntyoa1",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rmlybawc6kxe2lb");

  return dao.deleteCollection(collection);
})

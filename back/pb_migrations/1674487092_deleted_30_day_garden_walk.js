migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qx3u96vfrudhm3a");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "qx3u96vfrudhm3a",
    "created": "2023-01-23 15:17:09.908Z",
    "updated": "2023-01-23 15:17:09.908Z",
    "name": "30_day_garden_walk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qolyycjc",
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
        "id": "3gsga8fz",
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

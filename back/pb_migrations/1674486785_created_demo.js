migrate((db) => {
  const collection = new Collection({
    "id": "f2r8od1eg9nh6gw",
    "created": "2023-01-23 15:13:05.768Z",
    "updated": "2023-01-23 15:13:05.768Z",
    "name": "demo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gmypa0ts",
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
        "id": "nhyc0vwv",
        "name": "status",
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
  const collection = dao.findCollectionByNameOrId("f2r8od1eg9nh6gw");

  return dao.deleteCollection(collection);
})

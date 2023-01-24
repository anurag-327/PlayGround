migrate((db) => {
  const collection = new Collection({
    "id": "cy70c7l3cq9e06b",
    "created": "2023-01-23 15:08:35.751Z",
    "updated": "2023-01-23 15:08:35.751Z",
    "name": "demo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "enn7ozva",
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
        "id": "5mzsa6tv",
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
  const collection = dao.findCollectionByNameOrId("cy70c7l3cq9e06b");

  return dao.deleteCollection(collection);
})

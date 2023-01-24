migrate((db) => {
  const collection = new Collection({
    "id": "ambll00hayz6eug",
    "created": "2023-01-23 14:24:03.879Z",
    "updated": "2023-01-23 14:24:03.879Z",
    "name": "demo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dqpgt2zg",
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
        "id": "lpxxcjyh",
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
  const collection = dao.findCollectionByNameOrId("ambll00hayz6eug");

  return dao.deleteCollection(collection);
})

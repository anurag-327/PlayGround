migrate((db) => {
  const collection = new Collection({
    "id": "emv5r6k7u8ea8cp",
    "created": "2023-01-23 15:18:25.624Z",
    "updated": "2023-01-23 15:18:25.624Z",
    "name": "30_day_garden_walk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xytvc0gd",
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
        "id": "yj9jckxp",
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
  const collection = dao.findCollectionByNameOrId("emv5r6k7u8ea8cp");

  return dao.deleteCollection(collection);
})

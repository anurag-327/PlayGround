migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mo2tsz6hvx9a8fk");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "mo2tsz6hvx9a8fk",
    "created": "2023-01-23 15:16:00.918Z",
    "updated": "2023-01-23 15:16:00.918Z",
    "name": "30_day_garden_walk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "izckszmh",
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
        "id": "ejxeytuj",
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

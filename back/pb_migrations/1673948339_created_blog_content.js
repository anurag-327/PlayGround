migrate((db) => {
  const collection = new Collection({
    "id": "v1eoy8l9fe7n4rn",
    "created": "2023-01-17 09:38:59.225Z",
    "updated": "2023-01-17 09:38:59.225Z",
    "name": "blog_content",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lqioik4e",
        "name": "date",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "vvpqr6gd",
        "name": "topic",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("v1eoy8l9fe7n4rn");

  return dao.deleteCollection(collection);
})

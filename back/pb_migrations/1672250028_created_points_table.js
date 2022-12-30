migrate((db) => {
  const collection = new Collection({
    "id": "vgqmrd0srkh9kl1",
    "created": "2022-12-28 17:53:48.686Z",
    "updated": "2022-12-28 17:53:48.686Z",
    "name": "points_table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9cvtigrl",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "unique": true,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "b9swdnz6",
        "name": "points",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("vgqmrd0srkh9kl1");

  return dao.deleteCollection(collection);
})

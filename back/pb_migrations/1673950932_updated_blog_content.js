migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1eoy8l9fe7n4rn")

  // remove
  collection.schema.removeField("zlworxmg")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1eoy8l9fe7n4rn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zlworxmg",
    "name": "field",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})

migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1eoy8l9fe7n4rn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vvpqr6gd",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1eoy8l9fe7n4rn")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})

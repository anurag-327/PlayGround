migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1eoy8l9fe7n4rn")

  // remove
  collection.schema.removeField("be3z8zro")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1eoy8l9fe7n4rn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "be3z8zro",
    "name": "tags",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})

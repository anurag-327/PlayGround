migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vgqmrd0srkh9kl1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vevtglxs",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g8bnxoaj",
    "name": "username",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kksatsjl",
    "name": "image",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vgqmrd0srkh9kl1")

  // remove
  collection.schema.removeField("vevtglxs")

  // remove
  collection.schema.removeField("g8bnxoaj")

  // remove
  collection.schema.removeField("kksatsjl")

  return dao.saveCollection(collection)
})

migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("emv5r6k7u8ea8cp")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("emv5r6k7u8ea8cp")

  collection.listRule = null

  return dao.saveCollection(collection)
})

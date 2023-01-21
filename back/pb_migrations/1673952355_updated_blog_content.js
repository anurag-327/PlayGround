migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1eoy8l9fe7n4rn")

  collection.listRule = "@request.auth.id=id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1eoy8l9fe7n4rn")

  collection.listRule = null

  return dao.saveCollection(collection)
})

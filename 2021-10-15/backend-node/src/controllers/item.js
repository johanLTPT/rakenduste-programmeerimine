const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  // Saaksite info kätta req.body -st

  const newItem = {
    name: "Table",
    quality: 99,
    unused: true,
    color: "blue"
  }

  const createdItem = new Item(newItem)

  const savedItem = await createdItem.save()

  res.status(200).send(`yay ${savedItem._id}`)
}

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findOneAndUpdate(
    {_id:id}, //filter
    {$inc:{quality:1}}, //update, aga selle ümber panin increment käsu
    {new:true} //tagasta uuendatud item
  )
  if (!item) res.status(404).send("No item with that id found")
  res.status(200).send(`Successfully UPDATED the following item: \n ${item}`)
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndDelete({ _id: id })

  if (!item) res.status(404).send("No item with that id found")

  res.status(200).send(`Successfully deleted the following item: \n ${item}`)
}
const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find({})
  
  res.status(200).send(posts)
}

exports.createPost = async (req, res) => {
  // Saaksite info kätta req.body -st
  const { title, user, text } = req.body
  const newPost = {
    title,
    user,
    text
  }

  const createdPost = new Post(newPost)

  const savedPost = await createdPost.save()

  res.status(200).send(`yay ${savedPost._id}`)
}

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOneAndUpdate(
    {_id:id}, //filter
    {$inc:{quality:1}}, //update, aga selle ümber panin increment käsu
    {new:true} //tagasta uuendatud post
  )
  if (!post) res.status(404).send("No post with that id found")
  res.status(200).send(`Successfully UPDATED the following post: \n ${post}`)
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findOneAndDelete({ _id: id })

  if (!post) res.status(404).send("No post with that id found")

  res.status(200).send(`Successfully deleted the following post: \n ${post}`)
}
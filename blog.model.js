const mongoose = require('mongoose')

const BlogsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is requried"]
    },

    text: {
        type: String,
        required: [true, "text is requried"]
    },

    author: {
        type: String,
        required: [true, "who are you"]
    },
})

const Blog = mongoose.model("Blog", BlogsSchema);

module.exports = Blog;
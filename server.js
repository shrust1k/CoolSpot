const express = require('express')
const mongoose = require('mongoose')
const BlogSchema = require('./blog.model')
const app = express()

app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname})
})

//add post to db
app.post("/api/blogs", async (req, res) => {
    try {
        const blog = await BlogSchema.create(req.body);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await BlogSchema.find({});
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})


app.listen(3030)

mongoose.connect("mongodb+srv://admin:B10PvDaI3mcJrWwp@blogs.m8pwpvp.mongodb.net/Blogs?retryWrites=true&w=majority&appName=Blogs")
.then(
    console.log('connected to db')
)



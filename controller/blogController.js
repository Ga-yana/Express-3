const blog= require ("../models/blogModel")

exports.home= async(req, res)=>{
    res.send("Welcome to Blogs")
}

exports.createBlog=async (req, res)=>{
    try {
        const {title, content}= req.body
        if (!title || !content){
            throw new Error("Title and contents are required")
        }
        const blogExists= await Blog.findOne({title})
        if (blogExists){
            throw new Error("Title already exists")
        }

        const blog= await Blog.create({title, content})
        res.status(201).json({
            success:true,
            message: "Blog created successfully",
            blog
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message: error.message
        })
    }
}


exports.deleteBlog= async (req, res)=>{
    try {
        const blogId= req.params.id
        const blog= await Blog.findByIdAndDelete(blogId)
        res.status(200).json({
            success:true,
            message: "Blog deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message: error.message
        })
    }
}

exports.updateBlog= async(req, res)=>{
    try {
        const blog= await Blog.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success:true,
            message: "blog updated successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message: error.message
        })
    }
}


exports.updateBlog= async(req, res)=>{
    try {
        const blog= await Blog.replaceOne(req.params.id, req.body)
        res.status(200).json({
            success:true,
            message: "blog updated successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message: error.message
        })
    }
}
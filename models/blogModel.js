const mongoose= require("mongoose")

const blogSchema= new mongoose.Schema({
    title:{
        type: String,
        require: [true, "Title is required"],
        trim: true,
        unique: true
    },
    content:{
        type:String,
        require:[true,"Cannot save without content"]
    }
})
module.exports= mongoose.model("Blog", blogSchema)
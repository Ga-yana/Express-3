const express= require ("express")
const { router } = require("../../app")
const { home, createBlog, deleteBlog, updateBlog } = require("../blogController")

const router= express.Router()

router.get("/", home)
router.post("/createBlog", createBlog)
router.delete("/deleteBlog/:id", deleteBlog)
router.put("/updateBlod/:id", updateBlog)
router.put("/updateBlog/:id", updateBlog)

module.exports= router;
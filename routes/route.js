const express=require("express")
const {Post_Profile, Get_Profile, update_Profile, Delete_Profile } = require("../controller/profile")

const router=express.Router()


router.post("/api/post",Post_Profile)
router.get("/api/get",Get_Profile)
router.put("/api/update/:id",update_Profile)
router.delete("/api/delete/:id",Delete_Profile)

module.exports=router
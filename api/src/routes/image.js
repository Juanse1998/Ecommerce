const { Router } = require("express");
const router = Router();

const { allImages, deleteImage } = require("../controllers/image.controller"); 

router.get("/allImages", allImages)
router.delete("/deleteImage", deleteImage)

module.exports = router;
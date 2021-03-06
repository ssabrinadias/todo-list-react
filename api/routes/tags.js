const express = require("express");
const router = express.Router();
const { get, create, edit, delet } = require("../middlewares/tags");

router.get("/:id", get);

router.get("/", get);

router.post("/create", create);

router.post("/delete/:id", delet);

module.exports = router;

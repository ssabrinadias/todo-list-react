const express = require("express");
const router = express.Router();
const { get, create, edit, delet } = require("../middlewares/tasks");

router.get("/:id", get);

router.get("/", get);

router.post("/create", create);

router.post("/edit/:id", edit);

router.delete("/delete/:id", delet);

module.exports = router;

const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc get all user contacts
///@access private
router.get("/", (req, res) => {
  res.send("get all contacts");
});

// @route POST api/contacts
// @desc add contacts
///@access private
router.get("/", (req, res) => {
  res.send("add  contacts");
});

// @route PUT api/contacts/:id
// @desc update contacts
///@access private
router.put("/:id", (req, res) => {
  res.send("update  contacts");
});

// @route DELETE api/contacts/:id
// @desc delete contacts
///@access private
router.delete("/:id", (req, res) => {
  res.send("delete contacts");
});

module.exports = router;

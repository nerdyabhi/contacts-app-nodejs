const express = require('express');
const router = express.Router();
const {getAllContacts , getContact , createContact , updateContact , deleteContact } = require("../controllers/contactControllers")
router.use(express.json());

router.get("/", getAllContacts);

router.post("/" , createContact)

router.get("/:id" , getContact)

router.put("/:id" , updateContact)

router.delete("/:id" ,deleteContact )

module.exports = router;
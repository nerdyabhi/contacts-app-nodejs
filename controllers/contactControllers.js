
// @description : Get all contacts
// @route GET /api/contacts
// @access public
const getAllContacts = (req , res)=>{
    res.status(200).json({message:"Get all contacts"});
}

// @description : Create Contact
// @route POST /api/contacts/id
// @access public
const getContact =  (req, res)=>{
    res.status(200).json({message:`Get contact with id : ${req.params.id}`});
}

// @description : Create new Contact
// @route POST /api/contacts
// @access public
const createContact =(req, res)=>{
    res.status(200).json({message:"Create a contact"});
}

// @description : Update Contact
// @route PUT /api/contacts/id
// @access public
const updateContact = (req, res)=>{
    res.status(200).json({message:`Updating contact with id : ${req.params.id}` });
}

// @description : Delete Contact
// @route PUT /api/contacts/id
// @access public
const deleteContact = (req, res)=>{
    res.status(200).json({message:`Deleted contact with id : ${req.params.id}` });
}



module.exports = {getAllContacts , getContact , createContact , updateContact , deleteContact };
 
const asyncHandler = require('express-async-handler');
const contactModel = require('../model/contactModel');
const { Mongoose, default: mongoose } = require('mongoose');
// @description : Get all contacts
// @route GET /api/contacts
// @access public
const getAllContacts = async(req , res)=>{
    const contacts = await contactModel.find();
    res.status(200).json(contacts);
}

// @description : Create Contact
// @route POST /api/contacts/id
// @access public
const getContact =  asyncHandler(async(req, res)=>{
    const id = req.params.id;
   
    if(!mongoose.isValidObjectId(id)) res.json({message:"Not a valid id"});
    const contact = await contactModel.findById(req.params.id);
    if(!contact) res.status(404).json({message:"Contact Not Found"});
    res.status(200).json(contact);
})

// @description : Create new Contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async(req, res)=>{
    const{name, email , phone} = req.body;

    if(!name || !email || !phone){
        res.status(400).json({message:"Please send valid data"});
    }

    const contact = await contactModel.create({
        name, 
        email,
        phone
    });
    res.status(200).json(contact);
})

// @description : Update Contact
// @route PUT /api/contacts/id
// @access public
const updateContact = async(req, res)=>{
    const id = req.params.id;

    const contact = await contactModel.findById(id);
    if(!contact) res.status(404).json({msg:"Contact not found"}); 
   
    if(!mongoose.isValidObjectId(id)) return res.json({message:"Not a valid id"});
    const updatedContact = await contactModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    );

    if(!updatedContact) return res.status(404).json({message:"Contact Not Found"});
    res.status(200).json(updatedContact);
}

// @description : Delete Contact
// @route PUT /api/contacts/id
// @access public
const deleteContact = async(req, res)=>{
    const id = req.params.id;
    
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ msg: "Invalid contact ID" });
    }

    // Find and delete the contact
    const contact = await contactModel.findByIdAndDelete(id);

    // Check if contact exists
    if (!contact) {
        return res.status(404).json({ msg: "Contact not found" });
    }

    // Send response
    res.status(200).json({ msg: "Successfully deleted" });
}



module.exports = {getAllContacts , getContact , createContact , updateContact , deleteContact };
 
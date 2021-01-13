const express = require('express');
const router = express.Router();

//@route Get api/contact
//@desc  Get all user contact
//@access Private
router.get('/',(req,res) => {
    res.send("Get all Contact");
});

//@route POST api/contact
//@desc   Add new contact
//@access Private
router.post('/',(req,res) => {
    res.send("Add contact");
});

//@route PUT api/contact/:id
//@desc  Update contact
//@access Private
router.put('/:id',(req,res) => {
    res.send("Update contact");
});

//@route delete api/contact/:id
//@desc  Delete contact 
//@access Private
router.delete('/:id',(req,res) => {
    res.send("Delete a contact");
});

module.exports=router;
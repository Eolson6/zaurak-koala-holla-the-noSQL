const express = require('express');
const router = express.Router();
const mongoose = require('../modules/pool.js');

// Schema goes here
const Schema = mongoose.Schema;
const koalaSchema = new Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    ready_to_transfer: { type: Boolean, default: false , required: true},
    notes: {type: String, required: false}
});

const Koala = mongoose.model('koala', koalaSchema);




// // GET Route
// router.get('/', (req, res) => {
//     // REPLACE THIS with mongoose find
//     res.send([
//         {
//             _id: ObjectId("58de9673d0c1cb22fbcb2655"),
//             name: "Scotty",
//             gender: "M",
//             age: 4,
//             ready_to_transfer: true,
//             notes: "Born in Guatemala"
//         }
//     ])
// });

// POST route


// PUT route


// DELETE route


module.exports = router;

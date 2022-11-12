const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        type: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        description: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']           
        },
        skill1: {
            type: String,
            required: [false, '{PATH} is required.']

        },
        skill2: {
            type: String,
            required: [false, '{PATH} is required.']
        },
        skill3: {
            type: String,
            required: [false, '{PATH} is required.']
        }
    },
    {timestamps: true}
);


/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Pet = mongoose.model("Pet", PetSchema);

module.exports = {Pet: Pet};
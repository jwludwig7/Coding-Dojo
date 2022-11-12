const {Pet} = require("../models/Pet.model");

const createPet = async (data) => {
    console.log('service: createPet');
    const pet = await Pet.create(data);
    return pet;
}

const getAllPets = async () => {
    console.log('service: getAllPets');
    const pets = await Pet.find();
    return pets;
}

const getPetById = async (id) => {
    console.log('service: getPetById');
    const pet = await Pet.findById(id);
    return pet;
}

const deletePetById = async (id) => {
    console.log('service: deletePetById');
    const pet = await Pet.findByIdAndDelete(id);
    return pet;
}

const getPetByIdAndUpdate = async (id,data) => {
    console.log('service: getPetByIdAndUpdate');
    const pet = await Pet.findByIdAndUpdate(id, data, {
        // Re-run validations.
        runValidators: true,
        // Return the updated Pet.
        new:true
    });
    return pet;
}

module.exports = {
    createPet: createPet,
    getAllPets,
    getPetById,
    deletePetById,
    getPetByIdAndUpdate,
};
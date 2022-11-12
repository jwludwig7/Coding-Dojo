const {
    createPet,
    getAllPets,
    getPetById,
    deletePetById,
    getPetByIdAndUpdate,
} = require('../services/pet.service');


const handleCreatePet = async (req, res) => {
    console.log('controller: handleCreatePet req.body:', req.body);
    try {
        const pet = await createPet(req.body);
        return res.json(pet)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllPets = async (req, res) => {
    console.log('controller: handleGetAllPets');
    try {
        const pets = await getAllPets();
        return res.json(pets)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetPetById = async (req, res) => {
    console.log('controller: handleGetPetById req.params: ', req.params.id);
    try {
        const pet = await getPetById(req.params.id);
        return res.json(pet)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeletePetById = async (req, res) => {
    console.log('controller: handleDeletePetById req.params: ', req.params.id);
    try {
        const pet = await deletePetById(req.params.id);
        return res.json(pet)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdatePetById = async (req, res) => {
    console.log('controller: handleUpdatePetById req.params: ', req.params.id, "\n req.body :", req.body);
    try {
        const pet = await getPetByIdAndUpdate(req.params.id, req.body);
        return res.json(pet)
    } catch (error) {
        return res.status(400).json(error);
    }
}




module.exports = {
    handleCreatePet: handleCreatePet,
    handleGetAllPets,
    handleGetPetById,
    handleDeletePetById,
    handleUpdatePetById
}
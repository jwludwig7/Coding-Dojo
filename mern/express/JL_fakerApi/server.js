
const {faker} = require("@faker-js/faker");
const express = require("express");
const app = express();


console.log(express)
const port = 8001;

const userObject = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.number()
    }
    return newUser;
} ;

const companyObject = () => {
    const newCompany = {
        _id: faker.datatype.number(),
        name: faker.company.companyName(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zipCode: faker.address.zipCode(),
        country: "USA"
    }
    return newCompany;
}

const newFakeUser = userObject();
console.log(newFakeUser);

const newFakeCompany = companyObject();
console.log(newFakeCompany);






app.get('/', (req,res) => {
    return res.json({hello: 'world'})
});

app.get('/api/users/new', (req,res) => {
    return res.json({newFakeUser})
});

app.get('/api/companies/new', (req, res) => {
    return res.json({newFakeCompany})
});

app.get('/api/user/company', (req,res) => {
    return res.json({newFakeUser , newFakeCompany})
})

app.listen( port, () => {
    console.log(`Listening on port: ${port} for requests to respond to`) 
});
require('dotenv').config();
const { expect, assert } = require("chai");
const { dbConnection } = require("./database/config");
const request = require("supertest")("http://localhost:9000/api");
const Server = require('./Model/Server');
const server = new Server();
const app = server.app;

describe("ScoutController unit tests", () => {
    let scout_ ={
        nombre: "Prueba1",
        apellido:"Test1",
        email: "scout@correo.com",
        password:"12345678Test",
        link_ficha_medica:"www.link.com",
        fecha_nacimiento: "08-06-1988",
        celular: "323554989",
        esActivo:true,
        ramaAsociada:"Rama"
    };
    describe("CreateScout", () => {
        it("should create a new scout", async() => {
         let response =  await request.post("/scouts/create-scout").send(scout_);
         expect(response.status).to.equal(201);
         expect(response.body.ok).to.equal(true);
        });
        it("shouldn't create a duplicate scout", async() => {
        let response =   await request.post("/api/scouts/create-scout").send(scout_);
        expect(response.status).to.equal(400);
        expect(response.body).to.equal({ok:false,msg:"Not found"});
    });
});
    describe("ReadScout", () => {
        it("should return a scout", async() => {
         let response =  await request.post("/scouts/readScout/1");
         expect(response.status).to.equal(201);
         expect(response.body.ok).to.equal(true);
        });
        it("shouldn't return a scout", async() => {
        let response =   await request.post("/api/scouts/readScout/1");
        expect(response.status).to.equal(404);
        expect(response.body).to.equal({ok:false,msg:"Not found"});
    });
});
    describe("ReadScouts", () => {
        it("should return all scouts", async() => {
         let response =  await request.post("/scouts/allScouts");
         expect(response.status).to.equal(200);
         expect(response.body.ok).to.equal(true);
        });
        it("shouldn't return  scouts", async() => {
        let response =   await request.post("/api/scouts/allScouts");
        expect(response.status).to.equal(404);
        expect(response.body).to.equal({ok:false,msg:"Not found"});
    });
});


});

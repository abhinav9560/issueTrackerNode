const express = require('express');
const app = express();
const ConnectDB = require('./database/connectDb');


(async function () {
    try {
        await ConnectDB('mongodb+srv://abhinavanand0411:User123@issuetracker.ym6ulwy.mongodb.net/').then(() => {
            console.log("DB connection successfull");
        })
        app.listen(3000, () => {
            console.log("server is runninng");
        })
    } catch (error) {
        console.log(error, "ERRR");
    }
})()


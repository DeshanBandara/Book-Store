import express, { response } from "express";
import { PORT } from "./config.js";
import mongoose from 'mongoose';

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`Welcome to Book Shop`)
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
})